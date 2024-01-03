import { TextInput, TextInputProps } from "react-native";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

// type InputProps = {} & TextInputProps;

export function Input(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor={resources.colors.white}
      style={styles.input}
      {...props}
    />
  );
}
