import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Bug, BugPlay, ChevronLeft, Slash } from "lucide-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import * as InputRoot from "../../components/atoms/Input";

import { LayoutContainer } from "../../shared";
import { resources } from "../../utils/resources";
import { styles } from "./styles";
import { useState } from "react";
import { ModalSuccessSubmittedForm } from "../../components/organsms";
import { useBoolean } from "../../hooks";

export function RegisterBug() {
  const { top } = useSafeAreaInsets();
  const navigator = useNavigation();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [isOpen, handleOpen, handleClose] = useBoolean();

  return (
    <LayoutContainer>
      <View style={[styles.container, { marginTop: top }]}>
        <View style={styles.containerHeader}>
          <Bug size={32} color={resources.colors.white} />
          <Text style={styles.headerTitle}>Registor de Bugs</Text>
        </View>

        <View style={styles.containerNavigation}>
          <TouchableOpacity onPress={() => navigator.goBack()}>
            <Text style={[styles.navigationLink, styles.navigationClicable]}>
              Configurações
            </Text>
          </TouchableOpacity>
          <Slash color={resources.colors.white} size={16} />
          <Text
            style={[styles.navigationLink, { color: resources.colors.gray200 }]}
          >
            Registor de Bugs
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.col}>
            <Text style={styles.label}>Título</Text>
            <InputRoot.Container>
              <InputRoot.Input
                placeholder="Título"
                onChangeText={setTitle}
                value={title}
              />
            </InputRoot.Container>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Descrição do Problema</Text>
            <InputRoot.Container>
              <InputRoot.Input
                multiline
                placeholder="Descreva o bug"
                style={styles.input}
                textAlignVertical="top"
                onChangeText={setDescription}
                value={description}
              />
            </InputRoot.Container>
          </View>

          <TouchableOpacity
            onPress={handleOpen}
            style={[styles.baseButton, styles.buttonSend]}
          >
            <BugPlay size={28} color={resources.colors.white} />
            <Text style={styles.buttonText}>Registrar Bug</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.baseButton}
            onPress={() => navigator.goBack()}
          >
            <ChevronLeft size={28} color={resources.colors.yellow} />
            <Text style={styles.buttonBackText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <ModalSuccessSubmittedForm
        isOpen={isOpen}
        onRequestClose={handleClose}
        title="Feedback Enviado Com Sucesso"
        description="Obrigado pelo seu feedback!"
      />
    </LayoutContainer>
  );
}
