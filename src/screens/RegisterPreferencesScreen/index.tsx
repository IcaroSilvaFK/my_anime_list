import { FlatList, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { genresMock } from "../../mocks/genres";
import { Button, Select } from "../../components/atoms";
import { usePreferredGenresStore } from "../../store/preferredGenres.store";
import { LayoutContainer } from "../../shared";
import { useNavigation } from "@react-navigation/native";
import { Navigation } from "lucide-react-native";
import { resources } from "../../utils/resources";
import { CardSelect } from "../../components/atoms";

export function RegisterPreferencesScreen() {
  const { setGenreId, genresId } = usePreferredGenresStore((state) => state);
  const navigator = useNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <LayoutContainer>
      <View style={styles.container}>
        <View style={[styles.header, { marginTop: top }]}>
          <Text style={styles.title}>Selecione seus Generos Favoritos</Text>
        </View>
        <ScrollView>
          <View style={styles.content}>
            {genresMock.map((item) => (
              <CardSelect
                key={item.name}
                title={item.name}
                onPress={() => setGenreId(item.mal_id)}
                selected={genresId.includes(item.mal_id)}
                genreId={item.mal_id}
              />
            ))}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Button
            title="Continuar"
            disabled={!genresId.length}
            onPress={() => navigator.navigate("tabs")}
            leftIcon={Navigation}
          />
        </View>
      </View>
    </LayoutContainer>
  );
}
