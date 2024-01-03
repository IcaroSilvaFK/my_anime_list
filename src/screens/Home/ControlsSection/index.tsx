import {
  LayoutDashboard,
  MessageCircleCode,
  Presentation,
  Star,
} from "lucide-react-native";
import { View } from "react-native";

import { styles } from "./styles";
import { ControlCard } from "../../../components/atoms";
import { useNavigation } from "@react-navigation/native";

export function ControlSection() {
  const navigator = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <ControlCard
          icon={LayoutDashboard}
          text="Generos"
          onPress={() => navigator.navigate("genres")}
        />
        <ControlCard icon={Presentation} text="Sesson" />
      </View>
      <View style={styles.row}>
        <ControlCard icon={Star} text="Top animes" />
        <ControlCard icon={MessageCircleCode} text="Reviews" />
      </View>
    </View>
  );
}
