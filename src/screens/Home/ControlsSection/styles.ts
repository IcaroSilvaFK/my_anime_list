import { transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 22,
    paddingHorizontal: 22
  },
  row: {
    flexDirection: "row",
    gap: 22,
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    padding: 12,
    backgroundColor: transparentize(0.8, resources.colors.violet500),
    gap: 4,
    elevation: 4,
  },
  text: {
    color: resources.colors.white,
    fontSize: 18,
    fontFamily: resources.fonts.DMSans_400Regular,
  }
})