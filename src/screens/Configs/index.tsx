import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { LayoutContainer } from "../../shared";

import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderWithGoBack } from "../../components/organsms";
import { ACTION_CONFIGS, configs } from "./configs";
import { useNavigation } from "@react-navigation/native";
import { useUserStore } from "../../store/userDetails.store";
import { useFavoriteAnimes } from "../../store/favoritesAnimes.store";
import { usePreferredGenresStore } from "../../store/preferredGenres.store";

export function Configs() {
  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();

  const { deleteUser } = useUserStore((state) => state);
  const { clearFavorites } = useFavoriteAnimes((state) => state);
  const { clear } = usePreferredGenresStore((state) => state);

  function handleAction(action?: ACTION_CONFIGS, route?: string) {
    if (action) {
      if (action === ACTION_CONFIGS.DELETE_ACCOUNT) {
        deleteUser();
        clearFavorites();
        clear();
        return;
      }
    }

    if (route) {
      navigator.navigate(route as any);
    }
  }

  return (
    <LayoutContainer>
      <View style={[styles.container, { marginTop: top }]}>
        <FlatList
          data={configs}
          style={styles.listStyle}
          ListHeaderComponent={() => (
            <HeaderWithGoBack title="Configurações da conta" />
          )}
          ItemSeparatorComponent={() => <View style={{ height: 22 }} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.card,
                {
                  backgroundColor: item.color,
                },
              ]}
              onPress={() => handleAction(item?.action, item?.route)}
            >
              {item.icon}
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </LayoutContainer>
  );
}
