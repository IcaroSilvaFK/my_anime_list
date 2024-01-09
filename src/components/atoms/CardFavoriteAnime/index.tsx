import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Button } from "../Button";
import { Ban, CopyX, Trash, Trash2 } from "lucide-react-native";
import { resources } from "../../../utils/resources";
import { AnimeDTO } from "../../../dtos/anime.dto";
import { useNavigation } from "@react-navigation/native";
import { useBoolean } from "../../../hooks";

type Props = {
  onRequestRemove: () => void;
} & AnimeDTO;

export function CardFavoriteAnime(props: Props) {
  const { title, images, onRequestRemove, mal_id } = props;
  const navigator = useNavigation();

  const [isOpenModal, handleOpenModal, handleCloseModal] = useBoolean();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigator.navigate("viewDetails", {
          animeId: mal_id,
        })
      }
    >
      <Image
        source={{
          uri: images.jpg.image_url,
          cache: "force-cache",
        }}
        style={styles.image}
      />
      <View style={styles.containerControls}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Button
          title="Remover"
          leftIcon={Trash}
          bg={resources.colors.red}
          onPress={handleOpenModal}
        />
      </View>
      <Modal
        transparent
        visible={isOpenModal}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={styles.modalLayer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Deseja remover o anime?</Text>
            <TouchableOpacity
              style={styles.buttonClose}
              onPress={handleCloseModal}
            >
              <CopyX size={22} color={resources.colors.white} />
            </TouchableOpacity>
            <View style={styles.modalFooter}>
              <TouchableOpacity
                style={[styles.baseButton, styles.buttonDelete]}
                onPress={onRequestRemove}
              >
                <Trash2 size={22} color={resources.colors.white} />
                <Text style={styles.buttonText}>Remover</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.baseButton, styles.buttonCancel]}
                onPress={handleCloseModal}
              >
                <Ban size={22} color={resources.colors.white} />
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}
