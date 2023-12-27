import { Text, TouchableOpacity, View } from "react-native";
import { Check } from "lucide-react-native";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

type Props = {
  title: string;
  selected?: boolean;
  onPress?: () => void;
};

export function Select(props: Props) {
  const { title, onPress, selected } = props;

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttonSelect} onPress={onPress}>
        {selected && (
          <Check
            color={resources.colors.lightGreen}
            fontWeight="bold"
            size={16}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
