import { View } from "react-native";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

type Props = {
  progress: number;
};

export function ProgressBar(props: Props) {
  const { progress } = props;

  const convertToPx = (progress / 100) * 1000;

  return (
    <View style={styles.container}>
      <View
        style={{
          width: convertToPx,
          backgroundColor: resources.colors.violet500,
          flex: 1,
        }}
      />
    </View>
  );
}
