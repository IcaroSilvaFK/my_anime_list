import { TouchableOpacity, View, useAnimatedValue } from "react-native";
import { AvatarWithUserName } from "../AvatarWithUserName";
import { Settings } from "lucide-react-native";
import { resources } from "../../../utils/resources";

import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  hasPadding?: boolean;
};

export function HeaderWithConfig(props: Props) {
  const { hasPadding = true } = props;

  const navigator = useNavigation();

  const padding = hasPadding
    ? { paddingVertical: 12, paddingHorizontal: 22 }
    : {};

  return (
    <View style={[styles.container, padding]}>
      <AvatarWithUserName />
      <TouchableOpacity onPress={() => navigator.navigate("configs")}>
        <Settings color={resources.colors.white} size={32} />
      </TouchableOpacity>
    </View>
  );
}
