import { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = {
  children: ReactNode;
};

export function Container(props: Props) {
  const { children } = props;

  return <View style={styles.container}>{children}</View>;
}
