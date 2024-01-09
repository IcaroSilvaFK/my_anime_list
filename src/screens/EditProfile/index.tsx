import { View } from "react-native";
import { GalleryVerticalEnd, SaveAll } from "lucide-react-native";
import * as ImagePicker from "expo-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { LayoutContainer } from "../../shared";
import { HeaderWithGoBack } from "../../components/organsms";
import * as InputRoot from "../../components/atoms/Input";

import { styles } from "./styles";
import { useUserStore } from "../../store/userDetails.store";
import { Avatar, Button } from "../../components/atoms";
import { useState } from "react";
import { Toast } from "toastify-react-native";
import { resources } from "../../utils/resources";

export function EditProfile() {
  const { top } = useSafeAreaInsets();
  const { user, setUser } = useUserStore((state) => state);

  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [username, setUsername] = useState(user?.username || "");

  async function changeAvatar() {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      Toast.error("Nenhuma imagem selecionada.", "top");
      return;
    }

    const { uri } = result.assets[0];

    setAvatar(uri);
  }

  function onRequestSave() {
    if (!username || !username.trim()) {
      Toast.error("Por favor, informe o seu nome.", "top");
      return;
    }

    if (!avatar) {
      Toast.error("Por favor, selecione uma imagem.", "top");
      return;
    }

    setUser({
      avatar,
      username,
    });
    Toast.success("Alterações salvas com sucesso!", "top");
  }

  return (
    <LayoutContainer>
      <View style={[styles.container, { marginTop: top }]}>
        <HeaderWithGoBack title="Editar Perfil" />
        <View style={styles.avatarContainer}>
          <Avatar username={username} url={avatar} width={120} height={120} />

          <Button
            leftIcon={GalleryVerticalEnd}
            title="Carregar imagem da galeria"
            onPress={changeAvatar}
          />
        </View>
        <View style={styles.form}>
          <InputRoot.Container>
            <InputRoot.Input
              placeholder="Digite aqui o nome"
              value={username}
              onChangeText={setUsername}
            />
          </InputRoot.Container>

          <Button
            leftIcon={SaveAll}
            title="Salvar alterações"
            onPress={onRequestSave}
            bg={resources.colors.green500}
          />
        </View>
      </View>
    </LayoutContainer>
  );
}
