import { View } from "react-native";

import { styles } from "./styles";
import { resources } from "../../../utils/resources";

type Props = {
  progress: number;
};

export function ProgressBar(props: Props) {
  const { progress } = props;

  return (
    <View style={styles.container}>
      <View
        style={{
          width: `${progress}%`,
          backgroundColor: resources.colors.violet500,
          flex: 1,
        }}
      />
    </View>
  );
}
