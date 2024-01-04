import { Star } from "lucide-react-native";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

type Props = {
  animeImage: string;
  title?: string;
  score: number;
};

export function CardEpisode(props: Props) {
  const { animeImage, score, title } = props;

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: animeImage,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.text} numberOfLines={2}>
          {title}
        </Text>
        <View style={styles.containerRating}>
          <Star size={18} color={resources.colors.yellow} />
          <Text style={styles.number}>{score}</Text>
        </View>
      </View>
    </View>
  );
}
