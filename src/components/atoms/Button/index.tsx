import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import { darken } from "polished";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";
import { ElementType } from "react";

type Props = {
  leftIcon?: ElementType;
  rightIcon?: ElementType;
  title: string;
  bg?: string;
} & TouchableOpacityProps;

const buttonIconProps = {
  size: 22,
  color: resources.colors.white,
};

export function Button(props: Props) {
  const {
    title,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
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
      {LeftIcon && <LeftIcon {...buttonIconProps} />}
      <Text style={styles.text}>{title}</Text>
      {/* {RightIcon && <RightIcon {...buttonIconProps} />} */}
    </TouchableOpacity>
  );
}
