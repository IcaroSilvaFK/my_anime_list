import { UserRound } from "lucide-react-native";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

type Props = {
  url?: string;
  username?: string;
};

export function Avatar(props: Props) {
  const { url, username } = props;

  return (
    <View style={styles.container}>
      {url && <Image source={{ uri: url }} style={styles.image} />}
      {!url && !username && (
        <View>
          <UserRound size={38} color={resources.colors.violet500} />
        </View>
      )}
      {username && !url && <Text>{username.slice(0, 2).toUpperCase()}</Text>}
    </View>
  );
}
