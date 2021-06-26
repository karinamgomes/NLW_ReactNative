import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";


export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bulletStatus: {
    width: 8,
    height: 8,
      borderRadius: 4,
    marginRight: 9
  },
  title: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading,
  },
  nameStatus: {
    fontFamily:theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight,
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center'
  }

});