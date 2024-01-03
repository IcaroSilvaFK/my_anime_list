import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { CheckSquare2 } from "lucide-react-native";
import { resources } from "../../../utils/resources";
import { transparentize } from "polished";

type Props = {
  title: string;
  onPress: () => void;
  selected: boolean;
  genreId: number;
};

export function CardSelect(props: Props) {
  const { title, onPress, selected } = props;

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          backgroundColor: selected
            ? transparentize(0.9, resources.colors.violet500)
            : transparentize(0.9, resources.colors.white),
        },
      ]}
      onPress={onPress}
    >
      <View
        style={[
          styles.absolute,
          {
            borderWidth: 2,
            borderColor: selected
              ? resources.colors.violet500
              : resources.colors.gray500,
          },
        ]}
      >
        <Text style={styles.text}>{title}</Text>
        {selected && (
          <View style={styles.indicativeIcon}>
            <CheckSquare2
              fill={resources.colors.violet500}
              size={26}
              color={resources.colors.white}
            />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}
