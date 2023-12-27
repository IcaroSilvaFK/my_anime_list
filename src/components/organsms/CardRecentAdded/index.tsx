import { Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function CardRecentAdded() {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={{
          uri: "https://fastly.picsum.photos/id/451/200/300.jpg?hmac=I8NLrhKLa1kmeJm2G28UsnA6fiV7Hg5LpGPHpLgde-M",
        }}
        style={styles.image}
      />
      <Text style={styles.text}>Teste 1</Text>
    </TouchableOpacity>
  );
}
