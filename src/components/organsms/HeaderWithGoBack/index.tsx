import { ArrowLeftCircle } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { resources } from "../../../utils/resources";

type Props = {
  title: string;
};

export function HeaderWithGoBack(props: Props) {
  const { title } = props;

  const navigator = useNavigation();

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => navigator.goBack()}>
        <ArrowLeftCircle size={32} color={resources.colors.white} />
      </TouchableOpacity>
      <Text numberOfLines={1} style={styles.title}>
        {title}
      </Text>
    </View>
  );
}
