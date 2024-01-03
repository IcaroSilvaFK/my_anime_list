import { transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    overflow: 'hidden',
    backgroundColor: transparentize(.8, resources.colors.violet500),
    borderWidth: 2,
    borderColor: resources.colors.violet500
  },
  image: {
    width: 48,
    height: 48,
    resizeMode: 'stretch'
  },
})