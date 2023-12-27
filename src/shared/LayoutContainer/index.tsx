import { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type LayoutContainerProps = {
  children: ReactNode;
};

export function LayoutContainer(props: LayoutContainerProps) {
  const { children } = props;
  return <View style={styles.container}>{children}</View>;
}
