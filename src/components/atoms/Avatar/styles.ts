import { transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: transparentize(.8, resources.colors.violet500),
    borderWidth: 2,
    borderColor: resources.colors.violet500
  },
  image: {

    resizeMode: 'stretch'
  },
  text: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 16
  }
})