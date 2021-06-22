import { StyleSheet } from "react-native";
import { theme } from "../../global/styles.ts/theme";

export const styles = StyleSheet.create({
  container:{
    width:'80%',
    backgroundColor:theme.colors.primary,
    height: 56,
    borderRadius:8,
    flexDirection: 'row',
    alignItems: 'center',
   marginBottom:45

  },
  title:{
    flex:1,
    color:theme.colors.heading,
    fontSize:15,
    textAlign:'center'

  },
  iconWrapper:{
    width:56,
    height:56,
    justifyContent:'center',
    alignItems:'center',
    borderColor: theme.colors.line,
    borderRightWidth:1

  },
  icon:{
    width:24,
    height:18

  }

});
