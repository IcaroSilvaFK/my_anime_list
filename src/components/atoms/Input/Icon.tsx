import { ElementType } from "react";

import { styles } from "./styles";

type IconProps = {
  icon: ElementType;
};

export function Icon(props: IconProps) {
  const { icon: IconProperty } = props;

  return <IconProperty style={styles.icon} />;
}
