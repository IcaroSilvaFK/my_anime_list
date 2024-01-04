import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ArrowLeftCircle, PlusCircle, Trash2 } from "lucide-react-native";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { resources } from "../../utils/resources";
import { LayoutContainer } from "../../shared";
import { Button, CardEpisode, Chip, ProgressBar } from "../../components/atoms";
import { formatDate } from "../../utils/formatDate";

import { styles } from "./styles";
import { EmptyListComponent } from "../../components/atoms/EmptyListComponent";
import { useCallback, useState } from "react";
import { jikanApi } from "../../services/http.service";
import { AnimeDTO } from "../../dtos/anime.dto";
import { EpisodeDTO } from "../../dtos/episode.dto";
import { useFavoriteAnimes } from "../../store/favoritesAnimes.store";

export function ViewAnimeDetails() {
  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();
  const { params } = useRoute();

  const [animeDetails, setAnimeDetails] = useState<AnimeDTO>({} as AnimeDTO);
  const [episodes, setEpisodes] = useState<EpisodeDTO[]>([]);

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
    const { data } = await jikanApi.get<{ data: AnimeDTO }>(
      `/anime/${animeId}`
    );
    console.log({ data });
    setAnimeDetails(data);
  }, []);

  const handleRequestAnimeEpisodes = useCallback(async () => {
    const { data } = await jikanApi.get<{ data: EpisodeDTO[] }>(
      `/anime/${animeId}/episodes`
    );
    setEpisodes(data);
  }, []);

  return (
    <LayoutContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={[styles.header, { marginTop: top }]}>
            <TouchableOpacity onPress={() => navigator.goBack()}>
              <ArrowLeftCircle size={32} color={resources.colors.white} />
            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.title}>
              {animeDetails?.title}
            </Text>
          </View>

          <View style={styles.contentMainInformation}>
            <View>
              <Image
                source={{
                  uri: animeDetails.images?.jpg?.image_url,
                }}
                style={styles.imageCover}
              />
            </View>
            <View style={styles.containerDetails}>
              <View style={styles.contentCover}>
                <Text style={styles.label}>Genre</Text>
                {animeDetails?.genres?.map((genre) => (
                  <Chip key={genre?.mal_id}>{genre?.name}</Chip>
                ))}
              </View>
              <View style={styles.contentCover}>
                <Text style={styles.label}>Rating</Text>
                <ProgressBar progress={animeDetails.score || 0} />
              </View>
              <View style={styles.contentCover}>
                <Text style={styles.label}>Lançamento</Text>
                <Text style={styles.date}>
                  {animeDetails?.aired?.from &&
                    formatDate(new Date(animeDetails?.aired?.from))}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.animeSynopsis}>
            <Text style={styles.label}>Synopsis</Text>
            <Text style={styles.description}>{animeDetails?.synopsis}</Text>
          </View>
          <View style={styles.containerEpisodes}>
            <View style={styles.headerEpisodes}>
              <Text style={styles.label}>Episódios</Text>
            </View>
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
          </View>
          <View style={styles.footer}>
            {!animeExistsInFavorites && (
              <Button
                title="Adicionar a meus favoritos"
                leftIcon={PlusCircle}
                onPress={() => addFavorite(animeDetails)}
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
        </View>
      </ScrollView>
    </LayoutContainer>
  );
}
