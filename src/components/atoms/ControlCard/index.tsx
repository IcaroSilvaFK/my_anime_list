import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";
import { ElementType } from "react";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

type Props = {
  icon?: ElementType;
  text: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

export function ControlCard(props: Props) {
  const { icon: IconProperty, text, onPress, style } = props;

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      {IconProperty && (
        <IconProperty size={26} color={resources.colors.white} />
      )}
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}
