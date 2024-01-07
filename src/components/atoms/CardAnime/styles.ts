import { transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    maxWidth: 120,
  },
  containerImage: {
    width: 120,
    height: 180,
    borderRadius: 4,
    elevation: 20,
  },
  image: {
    width: 120,
    height: 180,
    borderRadius: 4,
  },
  absolute: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    width: 120,
    height: 180,
    backgroundColor: transparentize(0.9, resources.colors.dark)
  },
  rating: {
    position: 'absolute',
    top: 0,
    right: 4,
    backgroundColor: resources.colors.violet500,
    padding: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    alignItems: 'center'
  },
  ratingText: {
    fontSize: 14,
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular
  },
  body: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    maxWidth: 100
  }
})