import { Image, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { BadgeInfo, Star } from "lucide-react-native";
import { resources } from "../../../utils/resources";

type Props = {
  onPress?: () => void;
};

export function CardAnime(props: Props) {
  const { onPress } = props;

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.containerImage}>
        <View style={styles.absolute}>
          <Image
            source={{
              uri: "https://cdn.nekosapi.com/images/original/7d0a2260-9a84-4bfb-bb11-f26ed2722dc7.webp",
            }}
            style={styles.image}
          />
          <View style={styles.rating}>
            <Star
              size={16}
              color={resources.colors.yellow}
              fill={resources.colors.yellow}
            />
            <Text style={styles.ratingText}>22</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>
          Anime 1 cascascascas
        </Text>
        <BadgeInfo size={22} color={resources.colors.white} />
      </View>
    </TouchableOpacity>
  );
}
