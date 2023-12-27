import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { DMSans_400Regular, DMSans_700Bold } from "@expo-google-fonts/dm-sans";
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { useCallback } from "react";
import { ApplicationRoutes } from "./src/routes";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoadedFonts] = useFonts({
    DMSans_400Regular,
    DMSans_700Bold,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(() => {
    if (isLoadedFonts) {
      SplashScreen.hideAsync();
    }
  }, [isLoadedFonts]);

  if (!isLoadedFonts) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <ApplicationRoutes />
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
