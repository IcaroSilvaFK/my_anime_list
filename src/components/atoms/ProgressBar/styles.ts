import { transparentize } from 'polished'
import { StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'

export const styles = StyleSheet.create({
  container: {
    maxHeight: 8,
    width: '100%',
    flex: 1,
    borderRadius: 8,
    backgroundColor: transparentize(0.8, resources.colors.violet500),
    overflow: 'hidden'
  },
})