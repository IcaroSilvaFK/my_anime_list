import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../screens/Home";
import { resources } from "../../utils/resources";
import { transparentize } from "polished";
import { TabBarIndicator } from "../../components/atoms";
import { HomeIcon } from "lucide-react-native";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsNavigation() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 22,
          left: 20,
          right: 20,
          backgroundColor: transparentize(0.8, resources.colors.violet500),
          borderRadius: 15,
          height: 80,
          borderTopWidth: 0,
          elevation: 4,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (
            <TabBarIndicator
              icon={<HomeIcon color={resources.colors.white} size={22} />}
              title="Home"
            />
          ),
        }}
      />
    </Navigator>
  );
}
