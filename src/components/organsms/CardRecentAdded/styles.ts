import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 6,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  text: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 16
  }
})