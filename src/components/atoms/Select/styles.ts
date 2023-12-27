import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: resources.colors.gray300,
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 4,
    width: '100%',
  },
  text: {
    color: resources.colors.gray200,
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 16,
    marginLeft: 8
  },
  buttonSelect: {
    borderColor: resources.colors.gray300,
    borderStyle: 'solid',
    borderWidth: 1,
    width: 24,
    height: 24,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  }
})