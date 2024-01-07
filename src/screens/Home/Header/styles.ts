import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'
import { transparentize } from 'polished'


export const styles = StyleSheet.create({
  container: {
    height: 160
  },
  header: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  headerTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12
  },
  text: {
    color: resources.colors.white,
    fontSize: 18,
    fontFamily: resources.fonts.DMSans_700Bold,
  },
  emptyListContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: transparentize(.9, resources.colors.violet500),
    borderRadius: 8,
    elevation: 8,
    paddingVertical: 12,
  },
  emptyListText: {
    fontSize: 18,
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    textAlign: 'center'
  }
})