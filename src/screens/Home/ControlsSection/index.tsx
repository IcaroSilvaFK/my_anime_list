import {
  LayoutDashboard,
  MessageCircleCode,
  Presentation,
  Star,
} from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

export function ControlSection() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <LayoutDashboard size={26} color={resources.colors.white} />
          <Text style={styles.text}>Generos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Presentation size={26} color={resources.colors.white} />
          <Text style={styles.text}>Sesson</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button}>
          <Star size={26} color={resources.colors.white} />
          <Text style={styles.text}>Top animes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <MessageCircleCode size={26} color={resources.colors.white} />
          <Text style={styles.text}>Reviews</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
