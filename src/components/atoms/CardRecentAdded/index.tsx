import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  image: string;
  title: string;
  onPress?: () => void;
};

export function CardRecentAdded(props: Props) {
  const { image, title, onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text style={styles.text} numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
