import { StyleSheet } from 'react-native'
import { resources } from '../../utils/resources'
import { Dimensions } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: Dimensions.get('window').height * 0.2,
  },
  form: {
    paddingHorizontal: 12,
    paddingVertical: 12
  },
  animesSecionContainer: {
    paddingHorizontal: 12,
  },
  headerAnimesSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    fontSize: 18,
    color: resources.colors.white,
    fontFamily: resources.fonts.DMSans_700Bold
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  headerButtonText: {
    color: resources.colors.violet500,
    fontSize: 16,
    fontFamily: resources.fonts.Poppins_700Bold,
  },
})