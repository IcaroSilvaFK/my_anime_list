import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'
import { transparentize } from 'polished'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: transparentize(.9, resources.colors.white),
    padding: 20,
    borderRadius: 4,
    elevation: 8
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerUser: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  headerUsername: {
    fontSize: 16,
    fontFamily: resources.fonts.Poppins_400Regular,
    color: resources.colors.gray100
  },
  headerDate: {
    fontSize: 12,
    fontFamily: resources.fonts.Poppins_400Regular,
    color: resources.colors.gray200
  },
  recommendationBody: {
    marginTop: 8,
  },
  recommendationCard: {
    marginTop: 12
  },
  recommendationTitle: {
    fontSize: 14,
    fontFamily: resources.fonts.Poppins_400Regular,
    color: resources.colors.white,
    maxWidth: 250
  },
  recommendationImage: {
    width: '100%',
    height: 350,
    marginTop: 8,
    borderRadius: 4,
    resizeMode: 'contain',
    objectFit: 'cover'
  },
  recommendationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  recommendationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  recommendationButtonText: {
    fontSize: 12,
    fontFamily: resources.fonts.Poppins_700Bold,
    color: resources.colors.violet500
  },
  recommendationContent: {
    fontSize: 12,
    fontFamily: resources.fonts.Poppins_400Regular,
    color: resources.colors.white,
    marginTop: 12
  }
})