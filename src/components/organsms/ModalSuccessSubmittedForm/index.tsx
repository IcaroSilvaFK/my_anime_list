import { Modal, Text, TouchableOpacity, View } from "react-native";

import { styles } from "./styles";
import { CheckCheck, CopyX, MailCheck } from "lucide-react-native";
import { resources } from "../../../utils/resources";

type Props = {
  title: string;
  description?: string;
  onRequestClose(): void;
  isOpen: boolean;
};

export function ModalSuccessSubmittedForm(props: Props) {
  const { onRequestClose, title, description, isOpen } = props;

  return (
    <Modal
      animationType="fade"
      visible={isOpen}
      onRequestClose={onRequestClose}
      transparent
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.buttonClose} onPress={onRequestClose}>
            <CopyX color={resources.colors.red} />
          </TouchableOpacity>
          <MailCheck size={44} color={resources.colors.white} />
          <View style={styles.containerTexts}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </View>
          <TouchableOpacity onPress={onRequestClose} style={styles.button}>
            <CheckCheck size={22} color={resources.colors.white} />
            <Text style={styles.buttonText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
