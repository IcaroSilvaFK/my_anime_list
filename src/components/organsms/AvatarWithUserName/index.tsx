import { Text, View } from "react-native";

import { Avatar } from "../../atoms";

import { styles } from "./styles";
import { useUserStore } from "../../../store/userDetails.store";

export function AvatarWithUserName() {
  const { user } = useUserStore((state) => state);

  return (
    <View style={styles.container}>
      {user && <Avatar url={user.avatar} username={user?.username} />}
      <View style={styles.usernameDetails}>
        <Text style={styles.welcome}>Bem vindo</Text>
        <Text style={styles.username}>{user?.username}</Text>
      </View>
    </View>
  );
}
