import { Dimensions, View } from "react-native";
import { BaseShimmer } from "../../../components/atoms";

import { styles } from "./styles";

const DISCONT_FROM_PADDING = 80;

export function Loading() {
  const shimmerWidth = Dimensions.get("screen").width - DISCONT_FROM_PADDING;

  return (
    <View style={styles.container}>
      <BaseShimmer width={shimmerWidth} height={18} />

      <BaseShimmer width={shimmerWidth} height={200} />
    </View>
  );
}
