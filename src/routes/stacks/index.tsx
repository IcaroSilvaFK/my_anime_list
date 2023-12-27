import { createStackNavigator } from "@react-navigation/stack";
import { RegisterPreferencesScreen } from "../../screens/RegisterPreferencesScreen";
import { BottomTabsNavigation } from "../tabs";

const { Navigator, Screen } = createStackNavigator();

export function StackNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        component={RegisterPreferencesScreen}
        name="register_preferences"
      />
      <Screen name="tabs" component={BottomTabsNavigation} />
    </Navigator>
  );
}
