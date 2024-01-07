import { View } from "lucide-react-native";

import { styles } from "./styles";
import { BaseShimmer } from "../../../../components/atoms";

export function Loading() {
  return (
    <View style={styles.container}>
      <BaseShimmer
        width={45}
        height={45}
        shimmerStyle={{ borderRadius: 50 }}
        stopAutoRun
        containerProps={{
          style: {
            alignItems: "center",
            borderRadius: 50,
            width: 45,
            height: 45,
            overflow: "hidden",
            marginHorizontal: 40,
            marginBottom: 12,
          },
        }}
      />

      <BaseShimmer width={120} height={18} stopAutoRun />
    </View>
  );
}
