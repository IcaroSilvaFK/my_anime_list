import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    height: 160
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    color: resources.colors.white,
    fontSize: 18,
    fontFamily: resources.fonts.DMSans_700Bold,
  }
})