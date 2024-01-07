import { Image, Text, View } from "react-native";
import { LayoutContainer } from "../../shared";
import { HeaderWithGoBack } from "../../components/organsms";
import * as InputRoot from "../../components/atoms/Input";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { createAvatar } from "@dicebear/core";

import * as Collection from "@dicebear/collection";

import { styles } from "./styles";
import { useUserStore } from "../../store/userDetails.store";
import { Button } from "../../components/atoms";
import { useCallback, useState } from "react";

export function EditProfile() {
  const { top } = useSafeAreaInsets();
  const { user } = useUserStore((state) => state);

  const [avatar, setAvatar] = useState(user?.avatar);

  const onRequestGenerateRandomAvatar = useCallback(async () => {
    const types = Object.entries(Collection).map(([key, value]) => key);

    const type = types[Math.floor(Math.random() * types.length)];

    // const createAvatar =

    //@ts-expect-error
    const svg = createAvatar(Collection[type as keyof typeof Collection], {
      seed: user?.username || "icaro-vieira",
    });
    const str = await svg.toFile("avatar");
    console.log(str);
    // const url = await png.toDataUri();
    // setAvatar(str);
  }, []);
  // console.log(avatar);
  return (
    <LayoutContainer>
      <View style={[styles.container, { marginTop: top }]}>
        <HeaderWithGoBack title="Editar Perfil" />
        <View style={styles.avatarContainer}>
          <Image
            source={{
              uri: "https://cdn.myanimelist.net/images/anime/1263/124155.webp",
            }}
            style={styles.avatar}
          />

          <Button
            title="Gerar avatar aleatório"
            onPress={onRequestGenerateRandomAvatar}
          />
        </View>
        <View>
          <InputRoot.Container>
            <InputRoot.Input placeholder="Digite aqui o nome" />
          </InputRoot.Container>
        </View>
      </View>
    </LayoutContainer>
  );
}
