import {
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import * as InputRoot from "../../components/atoms/Input";
import { LayoutContainer } from "../../shared";
import { Header } from "./Header";
import { ControlSection } from "./ControlsSection";

import { styles } from "./styles";
import { PlusCircle, Search } from "lucide-react-native";
import { resources } from "../../utils/resources";
import { CardAnime } from "../../components/atoms";
import { HeaderWithConfig } from "../../components/organsms";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Home() {
  const { top } = useSafeAreaInsets();

  return (
    <LayoutContainer>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, { marginTop: top }]}>
          <HeaderWithConfig />
          <Header />
          <ControlSection />
          <View style={styles.form}>
            <InputRoot.Container>
              <InputRoot.Icon icon={Search} />
              <InputRoot.Input placeholder="Pesquisar" />
            </InputRoot.Container>
          </View>
          <View style={styles.animesSecionContainer}>
            <View style={styles.headerAnimesSection}>
              <Text style={styles.headerTitle}>Recomendados</Text>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Ver mais</Text>
                <PlusCircle color={resources.colors.violet500} />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 22 }}>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                ItemSeparatorComponent={() => <View style={{ width: 28 }} />}
                renderItem={() => <CardAnime />}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View style={[styles.animesSecionContainer, { marginTop: 22 }]}>
            <View style={styles.headerAnimesSection}>
              <Text style={styles.headerTitle}>Meus Favoritos</Text>
              <TouchableOpacity style={styles.headerButton}>
                <Text style={styles.headerButtonText}>Ver mais</Text>
                <PlusCircle color={resources.colors.violet500} />
              </TouchableOpacity>
            </View>
            <View style={{ marginTop: 22 }}>
              <FlatList
                data={[1, 2, 3, 4, 5]}
                ItemSeparatorComponent={() => <View style={{ width: 28 }} />}
                renderItem={() => <CardAnime />}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </LayoutContainer>
  );
}
