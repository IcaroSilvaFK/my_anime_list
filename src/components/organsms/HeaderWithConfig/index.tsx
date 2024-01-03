import { TouchableOpacity, View } from "react-native";
import { AvatarWithUserName } from "../AvatarWithUserName";
import { Settings } from "lucide-react-native";
import { resources } from "../../../utils/resources";

import { styles } from "./styles";

type Props = {
  hasPadding?: boolean;
};

export function HeaderWithConfig(props: Props) {
  const { hasPadding = true } = props;

  const padding = hasPadding
    ? { paddingVertical: 12, paddingHorizontal: 22 }
    : {};

  return (
    <View style={[styles.container, padding]}>
      <AvatarWithUserName />
      <TouchableOpacity>
        <Settings color={resources.colors.white} size={32} />
      </TouchableOpacity>
    </View>
  );
}
