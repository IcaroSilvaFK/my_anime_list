import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { PlusCircle, Trash2 } from "lucide-react-native";
import { useFocusEffect, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { resources } from "../../utils/resources";
import { LayoutContainer } from "../../shared";
import {
  BaseShimmer,
  Button,
  CardEpisode,
  Chip,
  ProgressBar,
} from "../../components/atoms";
import { formatDate } from "../../utils/formatDate";

import { styles } from "./styles";
import { EmptyListComponent } from "../../components/atoms/EmptyListComponent";
import { useCallback, useState } from "react";
import { jikanApi } from "../../services/http.service";
import { AnimeDTO } from "../../dtos/anime.dto";
import { EpisodeDTO } from "../../dtos/episode.dto";
import { useFavoriteAnimes } from "../../store/favoritesAnimes.store";
import { Toast } from "toastify-react-native";
import { HeaderWithGoBack } from "../../components/organsms";

export function ViewAnimeDetails() {
  const { top } = useSafeAreaInsets();
  const { params } = useRoute();

  const [animeDetails, setAnimeDetails] = useState<AnimeDTO>({} as AnimeDTO);
  const [episodes, setEpisodes] = useState<EpisodeDTO[]>([]);
  const [isLoadingAnimeDetails, setIsLoadingAnimeDetails] = useState(false);
  const [isLoadingEpisodes, setIsLoadingEpisodes] = useState(false);

  const { addFavorite, favoritesAnime, removeFavorite } = useFavoriteAnimes(
    (state) => state
  );

  const animeExistsInFavorites =
    favoritesAnime.filter((anime) => anime?.mal_id === animeDetails?.mal_id)
      .length > 0;

  const { animeId } = params as {
    animeId: number;
  };

  useFocusEffect(
    useCallback(() => {
      handleRequestAnimeDetails();
      handleRequestAnimeEpisodes();
    }, [])
  );

  const handleRequestAnimeDetails = useCallback(async () => {
    try {
      setIsLoadingAnimeDetails(true);
      const { data } = await jikanApi.get<{ data: AnimeDTO }>(
        `/anime/${animeId}`
      );

      setAnimeDetails(data);
    } catch (err) {
      console.log(err);
      Toast.error("An error has occurred, please try again later", "top");
    } finally {
      setIsLoadingAnimeDetails(false);
    }
  }, []);

  const handleRequestAnimeEpisodes = useCallback(async () => {
    try {
      setIsLoadingEpisodes(true);
      const { data } = await jikanApi.get<{ data: EpisodeDTO[] }>(
        `/anime/${animeId}/episodes`
      );
      setEpisodes(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingEpisodes(false);
    }
  }, []);

  return (
    <LayoutContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { marginTop: top }]}>
          <HeaderWithGoBack title={animeDetails?.title} />

          <View style={styles.contentMainInformation}>
            <View>
              {!isLoadingAnimeDetails && (
                <Image
                  source={{
                    uri: animeDetails.images?.jpg?.image_url,
                  }}
                  style={styles.imageCover}
                />
              )}

              {isLoadingAnimeDetails && (
                <BaseShimmer width={160} height={280} />
              )}
            </View>
            <View style={styles.containerDetails}>
              <View style={styles.contentCover}>
                <Text style={styles.label}>Genre</Text>
                {isLoadingAnimeDetails &&
                  Array.from({ length: 3 }).map((_, index) => (
                    <BaseShimmer
                      key={index}
                      width={160}
                      height={20}
                      style={{ marginTop: 5 }}
                    />
                  ))}
                {!isLoadingAnimeDetails &&
                  animeDetails?.genres?.map((genre) => (
                    <Chip key={genre?.mal_id}>{genre?.name}</Chip>
                  ))}
              </View>
              {animeDetails?.score && (
                <View style={styles.contentCover}>
                  <Text style={styles.label}>Rating</Text>
                  {isLoadingAnimeDetails && (
                    <BaseShimmer
                      width={100}
                      height={20}
                      style={{ marginTop: 5 }}
                    />
                  )}
                  {!isLoadingAnimeDetails && (
                    <ProgressBar progress={animeDetails.score || 0} />
                  )}
                </View>
              )}

              <View style={styles.contentCover}>
                <Text style={styles.label}>Lançamento</Text>
                <Text style={styles.date}>
                  {isLoadingAnimeDetails && (
                    <BaseShimmer width={100} height={20} />
                  )}

                  {!isLoadingAnimeDetails &&
                    animeDetails?.aired?.from &&
                    formatDate(new Date(animeDetails?.aired?.from))}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.animeSynopsis}>
            <Text style={styles.label}>Synopsis</Text>
            {isLoadingAnimeDetails &&
              Array.from({ length: 6 }).map((_, idx) => (
                <BaseShimmer key={idx} width={320} height={20} />
              ))}
            {!isLoadingAnimeDetails && (
              <Text style={styles.description}>{animeDetails?.synopsis}</Text>
            )}
          </View>
          <View style={styles.containerEpisodes}>
            <View style={styles.headerEpisodes}>
              <Text style={styles.label}>Episódios</Text>
            </View>
            {isLoadingEpisodes && (
              <FlatList
                horizontal
                data={Array.from({ length: 10 })}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                contentContainerStyle={{
                  paddingRight: 22,
                  paddingLeft: 12,
                  flex: episodes.length > 0 ? undefined : 1,
                }}
                renderItem={() => <BaseShimmer width={260} height={80} />}
              />
            )}
            {!isLoadingEpisodes && (
              <FlatList
                data={episodes}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                ListEmptyComponent={() => <EmptyListComponent />}
                contentContainerStyle={{
                  paddingRight: 22,
                  paddingLeft: 12,
                  flex: episodes.length > 0 ? undefined : 1,
                }}
                renderItem={({ item }) => (
                  <CardEpisode
                    animeImage={animeDetails.images?.jpg?.image_url}
                    title={item?.title}
                    score={item?.score}
                  />
                )}
                keyExtractor={({ mal_id }) => String(mal_id)}
              />
            )}
          </View>
          {!isLoadingAnimeDetails && (
            <View style={styles.footer}>
              {!animeExistsInFavorites && (
                <Button
                  title="Adicionar a meus favoritos"
                  leftIcon={PlusCircle}
                  onPress={() => {
                    addFavorite(animeDetails);
                    Toast.success("Anime adicionado.", "top");
                  }}
                />
              )}
              {animeExistsInFavorites && (
                <Button
                  title="Remover dos favoritos"
                  leftIcon={Trash2}
                  onPress={() => removeFavorite(animeDetails?.mal_id)}
                  bg={resources.colors.red}
                />
              )}
            </View>
          )}
        </View>
      </ScrollView>
    </LayoutContainer>
  );
}
