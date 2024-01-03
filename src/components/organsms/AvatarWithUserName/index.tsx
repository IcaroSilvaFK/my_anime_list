import { Text, View } from "react-native";
import { Avatar } from "../../atoms";

import { styles } from "./styles";

export function AvatarWithUserName() {
  return (
    <View style={styles.container}>
      <Avatar url="https://cdn.nekosapi.com/images/original/7d0a2260-9a84-4bfb-bb11-f26ed2722dc7.webp" />
      <View style={styles.usernameDetails}>
        <Text style={styles.welcome}>Bem vindo</Text>
        <Text style={styles.username}>Icaro Vieira</Text>
      </View>
    </View>
  );
}
