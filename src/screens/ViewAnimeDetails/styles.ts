import { Dimensions, StyleSheet } from 'react-native'
import { resources } from '../../utils/resources'
import { transparentize } from 'polished'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: Dimensions.get('window').height * 0.2,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 18,
    color: resources.colors.white,
    fontFamily: resources.fonts.DMSans_700Bold
  },
  contentMainInformation: {
    flex: 1,
    gap: 22,
    flexDirection: 'row',
    paddingHorizontal: 12
  },
  containerDetails: {
    flex: 1,
    gap: 12
  },
  contentCover: {
    flex: 1,
    backgroundColor: transparentize(.9, resources.colors.white),
    borderRadius: 4,
    elevation: 2,
    padding: 8,
    gap: 12,
    alignItems: 'flex-start'
  },
  imageCover: {
    width: 160,
    height: 280,
    borderRadius: 4,
    resizeMode: 'contain'
  },
  animeSynopsis: {
    gap: 12,
    marginTop: 12,
    backgroundColor: transparentize(.9, resources.colors.white),
    padding: 22,
    borderRadius: 4,
    elevation: 2,
    flex: 1,
    marginHorizontal: 12
  },
  label: {
    fontSize: 18,
    color: transparentize(.1, resources.colors.white),
    fontFamily: resources.fonts.DMSans_700Bold
  },
  date: {
    fontSize: 14,
    color: resources.colors.gray100,
    fontFamily: resources.fonts.Poppins_400Regular
  },
  description: {
    fontSize: 16,
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular
  },
  footer: {
    marginTop: 22,
    paddingHorizontal: 12
  },
  containerEpisodes: {
    marginTop: 12,
    gap: 12
  },
  headerEpisodes: {
    marginHorizontal: 12
  }
})