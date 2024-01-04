import { darken, transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
    gap: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: transparentize(.9, resources.colors.violet500),
  },
  text: {
    fontSize: 18,
    color: darken(0.1, resources.colors.white),
    fontFamily: resources.fonts.Poppins_400Regular,
    maxWidth: 280,
    textAlign: 'center'
  }
})