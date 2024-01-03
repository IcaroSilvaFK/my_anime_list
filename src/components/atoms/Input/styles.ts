import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'
import { transparentize } from 'polished'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: resources.colors.white,
    backgroundColor: transparentize(.9, resources.colors.white),
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width: '100%',
    gap: 8,
    elevation: 20
  },
  icon: {
    width: 24,
    height: 24,
    color: resources.colors.white
  },
  input: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 16,
    flex: 1
  }
})