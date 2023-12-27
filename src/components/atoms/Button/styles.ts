import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: '100%',
  },
  text: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
  }
})