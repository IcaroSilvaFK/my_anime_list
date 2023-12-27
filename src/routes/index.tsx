import { NavigationContainer } from "@react-navigation/native";

import { StackNavigation } from "./stacks";

export function ApplicationRoutes() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
