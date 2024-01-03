import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 2,
    paddingHorizontal: 12,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: resources.colors.violet500,
  },
  text: {
    fontSize: 14,
    color: resources.colors.violet500,
    fontFamily: resources.fonts.Poppins_400Regular
  }
})