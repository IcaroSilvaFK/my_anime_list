import { Text, View, TouchableOpacity } from "react-native";
import { useCallback, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import * as ExpoImagePricker from "expo-image-picker";
import { FileImage, User } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Toast } from "toastify-react-native";

import { LayoutContainer } from "../../shared";
import { Avatar, Button } from "../../components/atoms";
import { useUserStore } from "../../store/userDetails.store";
import { resources } from "../../utils/resources";
import * as InputRoot from "../../components/atoms/Input";

import { styles } from "./styles";

export function Profile() {
  const { user, setUser } = useUserStore((state) => state);

  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();

  const [username, setUserName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    if (user?.username) {
      navigator.navigate("register_preferences");
    }
  }, [user?.username]);

  const handleEditProfilePic = useCallback(async () => {
    const result = await ExpoImagePricker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePricker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) return;

    const { uri } = result.assets[0];
    setAvatar(uri);
  }, []);

  const onRequestSaveInformations = () => {
    if (!username || !username.trim()) {
      Toast.error("Por favor, informe o seu nome.", "top");
      return;
    }

    setUser({
      avatar,
      username,
    });

    navigator.navigate("register_preferences");
  };

  return (
    <LayoutContainer>
      <View style={[styles.container, { marginTop: top }]}>
        <View style={styles.header}>
          <Text style={styles.welcomeTitle}>Bem vindo.</Text>
          <Text style={styles.welcomeSubtitle}>My Anime List</Text>
        </View>
        <View style={styles.formRegisterInformations}>
          <View>
            <Avatar url={avatar} username={username} width={120} height={120} />
            <TouchableOpacity
              style={styles.buttonAddNewImage}
              onPress={handleEditProfilePic}
            >
              <FileImage size={32} color={resources.colors.white} />
            </TouchableOpacity>
          </View>
          <View style={styles.containerLabel}>
            <Text style={styles.label}>Nome de usuário</Text>
            <InputRoot.Container>
              <InputRoot.Icon icon={User} />
              <InputRoot.Input
                placeholder="Digite o nome de usuário"
                onChangeText={setUserName}
                value={username}
              />
            </InputRoot.Container>
          </View>
        </View>
        <View style={styles.footer}>
          <Button
            title="SALVAR ALTERAÇOES"
            disabled={!username || !username.trim()}
            onPress={onRequestSaveInformations}
          />
        </View>
      </View>
    </LayoutContainer>
  );
}
