import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import { darken } from "polished";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

type Props = {
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  title: string;
  bg?: string;
} & TouchableOpacityProps;

export function Button(props: Props) {
  const {
    title,
    leftIcon,
    rightIcon,
    bg = resources.colors.violet500,
    ...rest
  } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: rest.disabled ? darken(0.1, bg) : bg,
        },
      ]}
      {...rest}
    >
      {leftIcon && leftIcon}
      <Text style={styles.text}>{title}</Text>
      {rightIcon && rightIcon}
    </TouchableOpacity>
  );
}
