import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { CardRecentAdded } from "../../../components/atoms";
import { jikanApi } from "../../../services/http.service";
import { getCurrentDayInLongString } from "../../../utils/getCurrentDayInLongString";
import { availableReleaseDates } from "../../../utils/availableReleaseDates";
import { useEffect, useState } from "react";
import { AnimeDTO } from "../../../dtos/anime.dto";
import { Loading } from "./Loading";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const [animes, setAnimes] = useState<AnimeDTO[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const navigator = useNavigation();

  useEffect(() => {
    requestLatestAnimes();
  }, []);

  async function requestLatestAnimes() {
    try {
      setIsLoading(true);
      const currentLongLowerDate = getCurrentDayInLongString();
      const dateFromSearchInApi = availableReleaseDates.includes(
        currentLongLowerDate
      )
        ? currentLongLowerDate
        : "other";

      const data = await jikanApi.get<{ data: AnimeDTO[] }>(
        `/schedules?filter=${dateFromSearchInApi}`
      );
      setAnimes(data.data);
    } catch (err) {
      console.log(err);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Adicionados Recentemente</Text>
      </View>
      {isLoading && (
        <FlatList
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 50,
          }}
          data={Array.from({ length: 10 })}
          ItemSeparatorComponent={() => <View style={{ width: 120 }} />}
          renderItem={() => <Loading />}
        />
      )}
      {!isLoading && (
        <FlatList
          horizontal
          contentContainerStyle={{
            paddingHorizontal: 22,
            paddingVertical: 12,
          }}
          data={animes}
          ItemSeparatorComponent={() => <View style={{ width: 18 }} />}
          renderItem={({ item }) => (
            <CardRecentAdded
              image={item.images.jpg?.image_url}
              title={item.title}
              onPress={() =>
                navigator.navigate("viewDetails", {
                  animeId: item.mal_id,
                })
              }
            />
          )}
        />
      )}
    </View>
  );
}
