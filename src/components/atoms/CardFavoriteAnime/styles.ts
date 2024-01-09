import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'
import { transparentize } from 'polished'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 190,
    maxWidth: 190,
    borderRadius: 4,
    elevation: 8
  },
  image: {
    width: 190,
    height: 240,
    borderRadius: 4
  },
  containerControls: {
    marginTop: 12,
    gap: 12,
    paddingVertical: 6,
    paddingBottom: 12
  },
  title: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 18
  },
  modalLayer: {
    backgroundColor: transparentize(.9, resources.colors.violet500),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: resources.colors.dark,
    height: 120,
    width: 340,
    borderRadius: 8,
    elevation: 8,
    position: 'absolute',
    padding: 12
  },
  modalTitle: {
    color: resources.colors.white,
    fontFamily: resources.fonts.Poppins_400Regular,
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 6
  },
  buttonClose: {
    position: 'absolute',
    top: 12,
    right: 12
  },
  modalFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 12
  },
  baseButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    borderRadius: 4,
    paddingHorizontal: 4,
    paddingVertical: 6
  },
  buttonText: {
    fontSize: 16,
    color: resources.colors.white,
    fontFamily: resources.fonts.DMSans_400Regular
  },
  buttonDelete: {
    backgroundColor: resources.colors.red,
  },
  buttonCancel: {
    backgroundColor: resources.colors.green500,
  }
})