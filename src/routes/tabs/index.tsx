import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../../screens/Home";
import { resources } from "../../utils/resources";
import { darken, transparentize } from "polished";
import { TabBarIndicator } from "../../components/atoms";
import { HomeIcon, Popcorn } from "lucide-react-native";
import { Genres } from "../../screens/Genres";
import { ListAnime } from "../../screens/ListAnimes";
import { ViewAnimeDetails } from "../../screens/ViewAnimeDetails";

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
          backgroundColor: darken(0.6, resources.colors.violet500),
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
              route="tabs"
            />
          ),
        }}
      />
      <Screen
        name="genres"
        component={Genres}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
        }}
      />
      <Screen
        name="listAnimes"
        component={ListAnime}
        options={{
          tabBarIcon: () => (
            <TabBarIndicator
              icon={<Popcorn color={resources.colors.white} size={22} />}
              title="Animes"
              route="listAnimes"
            />
          ),
          unmountOnBlur: true,
        }}
      />
      <Screen
        name="viewDetails"
        component={ViewAnimeDetails}
        options={{
          tabBarItemStyle: {
            display: "none",
          },
          unmountOnBlur: true,
        }}
      />
    </Navigator>
  );
}
