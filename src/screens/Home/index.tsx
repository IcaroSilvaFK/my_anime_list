import { SafeAreaView, Text } from "react-native";

import { LayoutContainer } from "../../shared";
import { Header } from "./Header";
import { ControlSection } from "./ControlsSection";

export function Home() {
  return (
    <LayoutContainer>
      <SafeAreaView>
        <Header />
        <ControlSection />
      </SafeAreaView>
    </LayoutContainer>
  );
}
