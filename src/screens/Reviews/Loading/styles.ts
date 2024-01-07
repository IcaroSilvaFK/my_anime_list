import { transparentize } from 'polished'
import { Dimensions, StyleSheet } from 'react-native'
import { resources } from '../../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    backgroundColor: transparentize(.9, resources.colors.white),
    padding: 20,
    borderRadius: 4,
    elevation: 8,
    width: Dimensions.get("screen").width - 40,
    gap: 22
  }
})