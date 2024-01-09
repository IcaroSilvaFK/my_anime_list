import { transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: transparentize(.8, resources.colors.dark),
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 8,
    elevation: 8,
    backgroundColor: resources.colors.dark,
    paddingVertical: 22,
    paddingHorizontal: 12,
  },
  buttonClose: {
    position: "absolute",
    top: 12,
    right: 12,
    borderRadius: 4,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  containerTexts: {
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginVertical: 12
  },
  title: {
    fontSize: 18,
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    textAlign: "center",
  },
  button: {
    marginTop: 12,
    backgroundColor: resources.colors.green500,
    borderRadius: 4,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  buttonText: {
    fontSize: 16,
    color: resources.colors.white,
    fontFamily: resources.fonts.DMSans_400Regular
  }
})