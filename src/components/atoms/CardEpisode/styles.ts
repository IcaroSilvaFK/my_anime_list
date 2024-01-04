import { transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    gap: 12,
    borderRadius: 8,
    backgroundColor: transparentize(0.9, resources.colors.white),
    elevation: 9,
    maxWidth: 350
  },
  image: {
    width: 64,
    height: 50,
    borderRadius: 8,
  },
  text: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 16,
    width: 250,
  },
  containerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  number: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 14
  }
})