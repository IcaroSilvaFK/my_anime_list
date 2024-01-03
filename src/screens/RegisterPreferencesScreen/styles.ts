import { StyleSheet } from 'react-native'
import { resources } from '../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 30,
    color: resources.colors.white,
  },
  content: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    gap: 22
  },
  footer: {
    padding: 12
  }
})