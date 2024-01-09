import { StyleSheet } from 'react-native'


export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 22,
    paddingHorizontal: 12,
    marginBottom: 22
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 50,
    objectFit: 'contain',
    resizeMode: 'cover',
  },
  form: {
    paddingHorizontal: 12,
    gap: 44
  }
})