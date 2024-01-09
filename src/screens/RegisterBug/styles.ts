import { Dimensions, StyleSheet } from 'react-native'
import { resources } from '../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: Dimensions.get("screen").width,
    paddingHorizontal: 22
  },
  containerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: resources.fonts.DMSans_700Bold,
    color: resources.colors.white,
  },
  containerNavigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 12,
    marginVertical: 22,

  },
  navigationLink: {
    fontSize: 14,
    fontFamily: resources.fonts.DMSans_400Regular,
    color: resources.colors.white
  },
  navigationClicable: {
    textDecorationStyle: 'solid',
    textDecorationColor: resources.colors.white,
    textDecorationLine: 'underline'
  },
  form: {
    gap: 22,
    flex: 1
  },
  input: {
    height: 150,
    fontFamily: resources.fonts.Poppins_400Regular,
  },
  baseButton: {
    borderRadius: 4,
    paddingVertical: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  col: {
    gap: 4,
  },
  label: {
    color: resources.colors.white,
    fontSize: 18,
    fontFamily: resources.fonts.DMSans_700Bold
  },
  buttonText: {
    color: resources.colors.white,
    fontSize: 18,
    fontFamily: resources.fonts.DMSans_700Bold
  },
  buttonSend: {
    backgroundColor: resources.colors.green500
  },
  buttonBackText: {
    color: resources.colors.yellow,
    fontSize: 18,
    fontFamily: resources.fonts.DMSans_700Bold
  }
})