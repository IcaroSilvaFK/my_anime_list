import { Dimensions, StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 12,
    gap: 12,
    width: Dimensions.get("screen").width - 12,
  },
  title: {
    fontSize: 18,
    color: resources.colors.white,
    fontFamily: resources.fonts.DMSans_700Bold
  },
})