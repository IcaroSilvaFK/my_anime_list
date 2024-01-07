import { transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { resources } from '../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 22,
  },
  listStyle: {
    flex: 1,
    paddingVertical: 22
  },
  card: {
    padding: 12,
    borderRadius: 8,
    elevation: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontFamily: resources.fonts.DMSans_700Bold,
    color: resources.colors.white
  },
})