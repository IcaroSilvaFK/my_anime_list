import { Dimensions, FlatList, View, useWindowDimensions } from "react-native";
import { LayoutContainer } from "../../shared";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { HeaderWithConfig } from "../../components/organsms";
import { BaseShimmer, ControlCard } from "../../components/atoms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { jikanApi } from "../../services/http.service";
import { GenreDTO } from "../../dtos/genre.dto";
import { Toast } from "toastify-react-native";

export function Genres() {
  const navigator = useNavigation();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const [genres, setGenres] = useState<GenreDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      requestAnimesGenres();
    }, [])
  );

  const requestAnimesGenres = useCallback(async () => {
    try {
      setIsLoading(true);
      const { data } = await jikanApi.get<{ data: GenreDTO[] }>("genres/anime");

      setGenres(data);
    } catch (err) {
      Toast.error("An error has occurred, please try again later", "top");
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <LayoutContainer>
      <View style={[styles.container, { minWidth: width }]}>
        {isLoading && (
          <FlatList
            ListHeaderComponent={<HeaderWithConfig />}
            data={Array.from({ length: 40 })}
            contentContainerStyle={{
              paddingBottom: Dimensions.get("window").height * 0.2,
              paddingHorizontal: 12,
              marginTop: top,
            }}
            numColumns={3}
            columnWrapperStyle={{
              gap: 12,
              marginBottom: 12,
            }}
            renderItem={() => <BaseShimmer width={120} height={100} />}
          />
        )}
        {!isLoading && (
          <FlatList
            data={genres}
            ListHeaderComponent={<HeaderWithConfig />}
            ListHeaderComponentStyle={{ marginBottom: 12 }}
            contentContainerStyle={{
              paddingBottom: Dimensions.get("window").height * 0.2,
              paddingHorizontal: 12,
              marginTop: top,
            }}
            numColumns={3}
            columnWrapperStyle={{
              gap: 12,
              marginBottom: 12,
            }}
            renderItem={({ item }) => (
              <ControlCard
                text={item.name}
                onPress={() =>
                  navigator.navigate("listAnimes", { genreId: item?.mal_id })
                }
                style={{ width: 120, height: 100 }}
              />
            )}
            keyExtractor={(item) => item.name}
          />
        )}
      </View>
    </LayoutContainer>
  );
}
