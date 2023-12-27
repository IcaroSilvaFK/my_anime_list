import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
  icon: JSX.Element;
  title: string;
};

export function TabBarIndicator(props: Props) {
  const { icon, title } = props;

  return (
    <TouchableOpacity style={styles.container}>
      {icon}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
