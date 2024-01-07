import { transparentize } from "polished";
import { ShimmerPlaceholder } from "../../../utils/shimmer";
import { resources } from "../../../utils/resources";
import { ShimmerPlaceholderProps } from "react-native-shimmer-placeholder";

export function BaseShimmer(props: ShimmerPlaceholderProps) {
  return (
    <ShimmerPlaceholder
      style={{
        backgroundColor: transparentize(0.9, resources.colors.violet500),
      }}
      shimmerColors={[
        transparentize(0.9, resources.colors.violet500),
        transparentize(0.9, resources.colors.violet500),
        transparentize(0.2, resources.colors.violet500),
      ]}
      {...props}
    />
  );
}
