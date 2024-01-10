import { ActivityIndicator, Dimensions, FlatList, View } from "react-native";
import { useCallback, useEffect, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";

import { LayoutContainer } from "../../shared";
import { HeaderWithConfig } from "../../components/organsms";
import { CardAnime } from "../../components/atoms";

import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { jikanApi } from "../../services/http.service";
import { AnimeDTO } from "../../dtos/anime.dto";
import { resources } from "../../utils/resources";

type RouteParams = {
  genreId?: number;
  searchTerm?: string;
  isTop?: boolean;
  isSeason?: boolean;
  q?: string;
};

export function ListAnime() {
  const { params } = useRoute();
  const { genreId, searchTerm, isTop, isSeason, q } = params as RouteParams;
  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();

  const [animes, setAnimes] = useState<AnimeDTO[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      requestAnimesFromList();
    }, [])
  );

  useEffect(() => {
    requestNextPage();
  }, [currentPage]);

  const requestAnimesFromList = useCallback(async () => {
    try {
      setIsLoading(true);
      const query = generateUrlWithParams();
      const baseParams = {
        order_by: "start_date",
        sort: "desc",
        page: currentPage,
      };

      if (isSeason) {
        const { data } = await jikanApi.get<{ data: AnimeDTO[] }>(`/seasons`, {
          params: {
            ...baseParams,
          },
        });
        setAnimes(data);
        return;
      }

      if (isTop) {
        const { data } = await jikanApi.get<{ data: AnimeDTO[] }>(
          `/top/anime`,
          {
            params: {
              ...baseParams,
            },
          }
        );
        setAnimes(data);
        return;
      }

      const { data } = await jikanApi.get<{ data: AnimeDTO[] }>(`/anime`, {
        params: {
          ...query,
          ...baseParams,
        },
      });

      setAnimes(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const requestNextPage = useCallback(async () => {
    try {
      setIsLoading(true);
      const query = generateUrlWithParams();

      if (isSeason) {
        const { data } = await jikanApi.get<{ data: AnimeDTO[] }>(
          `/seasons?page=${currentPage}`
        );
        setAnimes((prev) => [...prev, ...data]);
        return;
      }

      if (isTop) {
        const { data } = await jikanApi.get<{ data: AnimeDTO[] }>(
          `/top/anime?page=${currentPage}`
        );
        setAnimes((prev) => [...prev, ...data]);
        return;
      }

      const { data } = await jikanApi.get<{ data: AnimeDTO[] }>(`/anime`, {
        params: query,
      });
      setAnimes((prev) => [...prev, ...data]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  function generateUrlWithParams() {
    const query: {
      genres?: number;
      q?: string;
    } = {};
    if (genreId) {
      query["genres"] = genreId;
    }
    if (searchTerm) {
      query["q"] = searchTerm;
    }

    return query;
  }
  return (
    <LayoutContainer>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<HeaderWithConfig hasPadding={false} />}
          ListHeaderComponentStyle={{
            marginBottom: 32,
            flex: 1,
          }}
          contentContainerStyle={{
            marginTop: top,
            paddingBottom: Dimensions.get("window").height * 0.2,
          }}
          data={animes}
          columnWrapperStyle={{ gap: 12, marginBottom: 12 }}
          numColumns={3}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          ListFooterComponentStyle={{
            marginBottom: 100,
          }}
          ListFooterComponent={() =>
            isLoading ? (
              <ActivityIndicator
                size="large"
                color={resources.colors.violet500}
              />
            ) : null
          }
          renderItem={({ item }) => (
            <CardAnime
              onPress={() =>
                navigator.navigate("viewDetails", {
                  animeId: item.mal_id,
                })
              }
              title={item.title}
              rating={item?.score || 0}
              image={item?.images?.jpg?.image_url}
            />
          )}
          onEndReached={async () => {
            setCurrentPage((prev) => prev + 1);
          }}
          refreshing={true}
        />
      </View>
    </LayoutContainer>
  );
}
