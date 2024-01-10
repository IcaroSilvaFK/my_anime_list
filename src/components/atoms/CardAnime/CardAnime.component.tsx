import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { BadgeInfo, Star } from "lucide-react-native";
import { resources } from "../../../utils/resources";
import { memo } from "react";

type Props = {
  onPress?: () => void;
  image?: string;
  title: string;
  rating: number;
};

function CardAnime(props: Props) {
  const { onPress, title, image, rating } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.containerImage}>
        <View style={styles.absolute}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <View style={styles.rating}>
            <Star
              size={16}
              color={resources.colors.yellow}
              fill={resources.colors.yellow}
            />
            <Text style={styles.ratingText}>{rating}</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <BadgeInfo size={22} color={resources.colors.white} />
      </View>
    </TouchableOpacity>
  );
}

export default memo(CardAnime);
