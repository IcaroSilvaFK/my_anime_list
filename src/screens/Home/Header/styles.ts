import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    height: 160
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 22
  },
  text: {
    color: resources.colors.white,
    fontSize: 18,
    fontFamily: resources.fonts.DMSans_700Bold,
  }
})