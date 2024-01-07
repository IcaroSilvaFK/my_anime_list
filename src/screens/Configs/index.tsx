import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { LayoutContainer } from "../../shared";

import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HeaderWithGoBack } from "../../components/organsms";
import { configs } from "./configs";
import { resources } from "../../utils/resources";
import { transparentize } from "polished";
import { useNavigation } from "@react-navigation/native";

export function Configs() {
  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();

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
              onPress={() => navigator.navigate(item?.route as any)}
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
