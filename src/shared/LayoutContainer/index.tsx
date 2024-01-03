import { ReactNode } from "react";
import {
  KeyboardAvoidingView,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import { styles } from "./styles";

type LayoutContainerProps = {
  children: ReactNode;
};

export function LayoutContainer(props: LayoutContainerProps) {
  const { children } = props;
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { width, minHeight: height }]}>
      <KeyboardAvoidingView>
        <View style={styles.content}>{children}</View>
      </KeyboardAvoidingView>
    </View>
  );
}
