import { Star } from "lucide-react-native";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

export function CardEpisode() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://fastly.picsum.photos/id/451/200/300.jpg?hmac=I8NLrhKLa1kmeJm2G28UsnA6fiV7Hg5LpGPHpLgde-M",
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.text}>Ballad of Fallen Angels</Text>
        <View style={styles.containerRating}>
          <Star size={18} color={resources.colors.yellow} />
          <Text style={styles.number}>4.7</Text>
        </View>
      </View>
    </View>
  );
}
