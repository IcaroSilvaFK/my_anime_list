import { ReactNode } from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

export function Chip(props: Props) {
  const { children } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}
