import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  icon: JSX.Element;
  title: string;
  route: "register_preferences" | "tabs" | "genres" | "listAnimes" | "home";
};

export function TabBarIndicator(props: Props) {
  const { icon, title, route } = props;
  const navigator = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigator.navigate(route, {})}
    >
      {icon}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
