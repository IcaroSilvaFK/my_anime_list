import { createStackNavigator } from "@react-navigation/stack";
import { RegisterPreferencesScreen } from "../../screens/RegisterPreferencesScreen";

const { Navigator, Screen } = createStackNavigator();

export function StackNavigation() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        component={RegisterPreferencesScreen}
        name="RegisterPreferences"
      />
    </Navigator>
  );
}
