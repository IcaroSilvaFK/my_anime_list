import { Dimensions, FlatList, View } from "react-native";
import {
  AvatarWithUserName,
  HeaderWithGoBack,
} from "../../components/organsms";
import { LayoutContainer } from "../../shared";

import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFavoriteAnimes } from "../../store/favoritesAnimes.store";
import { CardFavoriteAnime } from "../../components/atoms";

export function EditFavorites() {
  const { top } = useSafeAreaInsets();
  const { favoritesAnime, removeFavorite } = useFavoriteAnimes(
    (state) => state
  );

  return (
    <LayoutContainer>
      <View style={[styles.container, { marginTop: top }]}>
        <HeaderWithGoBack title="Editar Favoritos" />
        <FlatList
          data={favoritesAnime}
          numColumns={2}
          contentContainerStyle={{
            flex: 1,
            paddingBottom: Dimensions.get("window").height * 0.2,
          }}
          columnWrapperStyle={{
            gap: 22,
            marginBottom: 22,
          }}
          renderItem={({ item }) => (
            <CardFavoriteAnime
              {...item}
              onRequestRemove={() => removeFavorite(item.mal_id)}
            />
          )}
        />
      </View>
    </LayoutContainer>
  );
}
