import { View, Text } from "react-native";
import { Frown } from "lucide-react-native";

import { resources } from "../../../utils/resources";
import { styles } from "./styles";
import { darken } from "polished";

type Props = {
  text?: string;
};

export function EmptyListComponent(props: Props) {
  const { text } = props;

  return (
    <View style={styles.container}>
      <Frown size={64} color={darken(0.1, resources.colors.white)} />
      <Text style={styles.text}>{text || "Nenhum item encontrado"}</Text>
    </View>
  );
}
