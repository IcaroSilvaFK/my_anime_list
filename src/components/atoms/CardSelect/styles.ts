import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'
import { transparentize } from 'polished'

export const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 120,
    borderRadius: 4,

    alignItems: "center",
    justifyContent: "flex-end"
  },
  image: {
    width: 120,
    height: 120,
  },
  shimmer: {
    width: 120,
    height: 120,
  },
  absolute: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: transparentize(0.7, resources.colors.dark),

  },
  text: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_700Bold,
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center'
  },
  indicativeIcon: {
    position: 'absolute',
    top: 4,
    right: 4
  }
})