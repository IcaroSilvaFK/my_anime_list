import { StyleSheet } from 'react-native'
import { resources } from '../../utils/resources'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: resources.colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    height: 80,
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: "uppercase",
    textAlign: "center",
    lineHeight: 30,
    color: resources.colors.white,
  },
  flatList: {
    marginTop: 20,
    flex: 1,
    padding: 12,
  },
  footer: {
    padding: 12
  }
})