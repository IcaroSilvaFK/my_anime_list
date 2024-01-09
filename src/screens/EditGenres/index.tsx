import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { genresMock } from "../../mocks/genres";
import { usePreferredGenresStore } from "../../store/preferredGenres.store";
import { LayoutContainer } from "../../shared";
import { CardSelect } from "../../components/atoms";
import { HeaderWithGoBack } from "../../components/organsms";

export function EditGenres() {
  const { setGenreId, genresId } = usePreferredGenresStore((state) => state);
  const { top } = useSafeAreaInsets();

  return (
    <LayoutContainer>
      <View style={styles.container}>
        <View style={[styles.header, { marginTop: top }]}>
          <HeaderWithGoBack title="Selecione seus Generos Favoritos" />
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
      </View>
    </LayoutContainer>
  );
}
