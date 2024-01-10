import { StyleSheet, Dimensions } from 'react-native'
import { resources } from '../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width,
    paddingHorizontal: 22,
    gap: 22
  },
  header: {
    gap: 12,
    marginTop: 22,
  },
  welcomeTitle: {
    fontSize: 16,
    fontFamily: resources.fonts.DMSans_700Bold,
    color: resources.colors.white
  },
  welcomeSubtitle: {
    fontSize: 22,
    fontFamily: resources.fonts.DMSans_400Regular,
    color: resources.colors.violet500,
    textTransform: 'uppercase'
  },
  formRegisterInformations: {
    flex: 1,
    gap: 22,
    alignItems: 'center',
  },
  buttonAddNewImage: {
    backgroundColor: resources.colors.violet500,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    position: 'absolute',
    right: -12,
    bottom: -22
  },
  containerLabel: {
    gap: 6,
    marginTop: 12,
  },
  label: {
    fontSize: 16,
    fontFamily: resources.fonts.DMSans_400Regular,
    color: resources.colors.white
  },
  footer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginBottom: 90
  }
})