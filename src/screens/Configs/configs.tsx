import {
  BookHeart,
  Bug,
  LayoutDashboard,
  Trash2,
  UserCog,
} from "lucide-react-native";
import { resources } from "../../utils/resources";
import { darken, transparentize } from "polished";

const iconProps = {
  size: 32,
  color: resources.colors.white,
};

export const configs = [
  {
    title: "Perfil",
    icon: <UserCog {...iconProps} />,
    color: transparentize(0.9, resources.colors.violet500),
    route: "editProfile",
  },
  {
    title: "Editar Favoritos",
    icon: <BookHeart {...iconProps} />,
    color: transparentize(0.9, resources.colors.violet500),
  },
  {
    title: "Generos Favoritos",
    icon: <LayoutDashboard {...iconProps} />,
    color: transparentize(0.9, resources.colors.violet500),
  },
  {
    title: "Registrar Bug",
    icon: <Bug {...iconProps} />,
    color: darken(0.2, resources.colors.yellow),
  },
  {
    title: "Deletar Conta",
    icon: <Trash2 {...iconProps} />,
    color: darken(0.1, resources.colors.red),
  },
];
