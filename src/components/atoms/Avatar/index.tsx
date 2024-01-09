import { UserRound } from "lucide-react-native";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

type Props = {
  url?: string;
  username?: string;
  width?: number;
  height?: number;
};

export function Avatar(props: Props) {
  const { url, username, width = 48, height = 48 } = props;

  return (
    <View style={[styles.container, { width, height }]}>
      {url && (
        <Image
          source={{ uri: url }}
          style={[styles.image, { width, height }]}
        />
      )}
      {!url && !username && (
        <View>
          <UserRound size={width / 2} color={resources.colors.violet500} />
        </View>
      )}
      {username && !url && (
        <Text style={styles.text}>{username.slice(0, 2).toUpperCase()}</Text>
      )}
    </View>
  );
}
