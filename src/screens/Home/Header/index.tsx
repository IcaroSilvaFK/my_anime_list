import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { CardRecentAdded } from "../../../components/organsms";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Adicionados Recentemente</Text>
      </View>
      <FlatList
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 22,
        }}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        ItemSeparatorComponent={() => <View style={{ width: 18 }} />}
        renderItem={() => <CardRecentAdded />}
      />
    </View>
  );
}
