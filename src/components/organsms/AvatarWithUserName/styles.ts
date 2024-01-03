import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'
import { transparentize } from 'polished'


export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  usernameDetails: {
    alignItems: 'flex-start',
  },
  username: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 18
  },
  welcome: {
    color: transparentize(.4, resources.colors.white),
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 14
  }
})