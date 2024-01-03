import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { ArrowLeftCircle, PlusCircle } from "lucide-react-native";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { resources } from "../../utils/resources";
import { LayoutContainer } from "../../shared";
import { Button, CardEpisode, Chip, ProgressBar } from "../../components/atoms";
import { formatDate } from "../../utils/formatDate";

import { styles } from "./styles";
import { EmptyListComponent } from "../../components/atoms/EmptyListComponent";

export function ViewAnimeDetails() {
  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();

  return (
    <LayoutContainer>
      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.header, { marginTop: top }]}>
            <TouchableOpacity onPress={() => navigator.goBack()}>
              <ArrowLeftCircle size={32} color={resources.colors.white} />
            </TouchableOpacity>
            <Text numberOfLines={1} style={styles.title}>
              Anime teste Lorem ipsum dolor sit amet, consectetur adipisicing
              elit. Odio inventore laboriosam voluptatem labore exercitationem,
              esse perspiciatis. Harum et beatae, ab sed,
            </Text>
          </View>

          <View style={styles.contentMainInformation}>
            <View>
              <Image
                source={{
                  uri: "https://cdn.nekosapi.com/images/original/7d0a2260-9a84-4bfb-bb11-f26ed2722dc7.webp",
                }}
                style={styles.imageCover}
              />
            </View>
            <View style={styles.containerDetails}>
              <View style={styles.contentCover}>
                <Text style={styles.label}>Genre</Text>
                <Chip>Comedy</Chip>
                <Chip>Comedy</Chip>
              </View>
              <View style={styles.contentCover}>
                <Text style={styles.label}>Rating</Text>
                <ProgressBar progress={12} />
              </View>
              <View style={styles.contentCover}>
                <Text style={styles.label}>Lançamento</Text>
                <Text style={styles.date}>{formatDate(new Date())}</Text>
              </View>
            </View>
          </View>
          <View style={styles.animeSynopsis}>
            <Text style={styles.label}>Synopsis</Text>
            <Text style={styles.description}>
              un Shirasaki and the Jinguuji sisters are childhood friends and
              neighbors. When Jun's first girlfriend, the older sister Ryuumi,
              breaks up with him, she says something that complicates the three
              people's relationship, their first loves, and their
              romance—?\n\n(Source: MAL News)
            </Text>
          </View>
          <View style={styles.containerEpisodes}>
            <View style={styles.headerEpisodes}>
              <Text style={styles.label}>Episódios</Text>
            </View>
            <FlatList
              data={[]}
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
              ListEmptyComponent={() => <EmptyListComponent />}
              horizontal
              contentContainerStyle={{ paddingHorizontal: 12, flex: 1 }}
              renderItem={() => <CardEpisode />}
            />
          </View>
          <View style={styles.footer}>
            <Button title="Adicionar a meus favoritos" leftIcon={PlusCircle} />
          </View>
        </View>
      </ScrollView>
    </LayoutContainer>
  );
}
