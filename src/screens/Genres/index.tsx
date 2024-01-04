import { Dimensions, FlatList, View, useWindowDimensions } from "react-native";
import { LayoutContainer } from "../../shared";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { HeaderWithConfig } from "../../components/organsms";
import { genresMock } from "../../mocks/genres";
import { ControlCard } from "../../components/atoms";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { jikanApi } from "../../services/http.service";
import { GenreDTO } from "../../dtos/genre.dto";

export function Genres() {
  const navigator = useNavigation();
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const [genres, setGenres] = useState<GenreDTO[]>([]);

  useFocusEffect(
    useCallback(() => {
      requestAnimesGenres();
    }, [])
  );

  const requestAnimesGenres = useCallback(async () => {
    const { data } = await jikanApi.get<{ data: GenreDTO[] }>("genres/anime");

    setGenres(data);
  }, []);

  return (
    <LayoutContainer>
      <View style={[styles.container, { minWidth: width }]}>
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
      </View>
    </LayoutContainer>
  );
}
