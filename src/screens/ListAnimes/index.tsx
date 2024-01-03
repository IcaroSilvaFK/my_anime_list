import { Dimensions, FlatList, ScrollView, View } from "react-native";
import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { LayoutContainer } from "../../shared";
import { HeaderWithConfig } from "../../components/organsms";
import { CardAnime } from "../../components/atoms";

import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type RouteParams = {
  genreId?: number;
  searchTerm?: string;
};

export function ListAnime() {
  const { params } = useRoute();
  const [initialPageSize, setInitialPageSize] = useState(20);
  const { genreId, searchTerm } = params as RouteParams;
  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();

  return (
    <LayoutContainer>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={<HeaderWithConfig hasPadding={false} />}
          ListHeaderComponentStyle={{
            marginBottom: 32,
          }}
          contentContainerStyle={{
            marginTop: top,
            paddingBottom: Dimensions.get("window").height * 0.2,
          }}
          data={Array.from({ length: initialPageSize })}
          columnWrapperStyle={{ gap: 12, marginBottom: 12 }}
          numColumns={3}
          ItemSeparatorComponent={() => <View style={{ width: 12 }} />}
          renderItem={() => (
            <CardAnime
              onPress={() =>
                navigator.navigate("viewDetails", {
                  animeId: 1,
                })
              }
            />
          )}
          onEndReached={() => setInitialPageSize(initialPageSize + 10)}
        />
      </View>
    </LayoutContainer>
  );
}
