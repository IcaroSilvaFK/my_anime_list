import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { genresMock } from "../../mocks/genres";
import { Button, Select } from "../../components/atoms";
import { usePreferredGenresStore } from "../../store/preferredGenres.store";

export function RegisterPreferencesScreen() {
  const { setGenreId, genresId } = usePreferredGenresStore((state) => state);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <Text style={styles.title}>Selecione seus Generos Favoritos</Text>
        </View>
        <FlatList
          style={styles.flatList}
          data={genresMock}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          keyExtractor={({ mal_id }) => mal_id.toString()}
          renderItem={({ item }) => (
            <Select
              title={item.name}
              onPress={() => setGenreId(item.mal_id)}
              selected={genresId.includes(item.mal_id)}
            />
          )}
        />
        <View style={styles.footer}>
          <Button title="Continuar" disabled={!genresId.length} />
        </View>
      </SafeAreaView>
    </View>
  );
}
