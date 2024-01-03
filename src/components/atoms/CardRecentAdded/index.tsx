import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  image: string;
  title: string;
};

export function CardRecentAdded(props: Props) {
  const { image, title } = props;

  return (
    <TouchableOpacity style={styles.container}>
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
