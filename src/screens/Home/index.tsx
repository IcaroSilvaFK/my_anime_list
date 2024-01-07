import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as InputRoot from "../../components/atoms/Input";
import { LayoutContainer } from "../../shared";
import { Header } from "./Header";
import { ControlSection } from "./ControlsSection";

import { styles } from "./styles";
import { BookHeart, PlusCircle, Search, Star } from "lucide-react-native";
import { resources } from "../../utils/resources";
import { CardAnime, EmptyListComponent } from "../../components/atoms";
import { HeaderWithConfig } from "../../components/organsms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { usePreferredGenresStore } from "../../store/preferredGenres.store";
import { jikanApi } from "../../services/http.service";
import { AnimeDTO } from "../../dtos/anime.dto";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useFavoriteAnimes } from "../../store/favoritesAnimes.store";

export function Home() {
  const { top } = useSafeAreaInsets();

  const navigator = useNavigation();

  const { genresId } = usePreferredGenresStore((state) => state);
  const [recommendedAnimes, setRecommendedAnimes] = useState<AnimeDTO[]>([]);

  const { favoritesAnime } = useFavoriteAnimes((state) => state);

  useFocusEffect(
    useCallback(() => {
      requestRecommendationsAnimes();
    }, [])
  );

  const requestRecommendationsAnimes = useCallback(async () => {
    try {
      const genresFromQuery = genresId.join(",");

      const query = `?genres=${genresFromQuery}`;

      const { data } = await jikanApi.get<{ data: AnimeDTO[] }>(
        `/anime${query}`
      );

      setRecommendedAnimes(data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <LayoutContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { marginTop: top }]}>
          <HeaderWithConfig />
          <Header />
          <ControlSection />
          <View style={styles.form}>
            <InputRoot.Container>
              <InputRoot.Icon icon={Search} />
              <InputRoot.Input placeholder="Pesquisar" />
            </InputRoot.Container>
          </View>
          <View style={styles.animesSecionContainer}>
            <View style={styles.headerAnimesSection}>
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Recomendados</Text>
                <BookHeart color={resources.colors.white} />
              </View>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Ver mais</Text>
                <PlusCircle color={resources.colors.violet500} />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 22 }}>
              <FlatList
                data={recommendedAnimes}
                contentContainerStyle={{
                  flex: 1,
                }}
                ItemSeparatorComponent={() => <View style={{ width: 28 }} />}
                ListEmptyComponent={() => (
                  <EmptyListComponent text="Oops parece que não temos recomendações para você!" />
                )}
                renderItem={({ item }) => (
                  <CardAnime
                    rating={item?.score || 0}
                    title={item.title}
                    image={item?.images?.jpg?.image_url}
                    onPress={() => {
                      navigator.navigate("viewDetails", {
                        animeId: item.mal_id,
                      });
                    }}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={[styles.animesSecionContainer, { marginTop: 22 }]}>
            <View style={styles.headerAnimesSection}>
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>Meus Favoritos</Text>
                <Star color={resources.colors.white} />
              </View>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Ver mais</Text>
                <PlusCircle color={resources.colors.violet500} />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 22 }}>
              <FlatList
                data={favoritesAnime}
                ItemSeparatorComponent={() => <View style={{ width: 28 }} />}
                contentContainerStyle={{
                  flex: favoritesAnime.length > 0 ? 0 : 1,
                }}
                ListEmptyComponent={() => (
                  <EmptyListComponent text="Oops parece que não temos animes favoritados. Adicione alguns!" />
                )}
                renderItem={({ item }) => (
                  <CardAnime
                    rating={item?.score || 0}
                    title={item.title}
                    image={item?.images?.jpg?.image_url}
                    onPress={() => {
                      navigator.navigate("viewDetails", {
                        animeId: item.mal_id,
                      });
                    }}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LayoutContainer>
  );
}

//icone para pagina de meus favoritos <BookHeart />
