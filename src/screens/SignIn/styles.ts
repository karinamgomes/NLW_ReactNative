import { StyleSheet } from 'react-native';

import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'
  },
  image:{
    width:'100%',
    height:360

  },
  content:{
    marginTop:-45,
    paddingHorizontal:50

  },
  title:{
   color:theme.colors.heading,
   textAlign:'center',
   fontSize:35,
   marginBottom:8,
   fontFamily:theme.fonts.title500,
   lineHeight:38
  },
  subtitle:{
   color:theme.colors.heading,
   textAlign:'center',
   fontSize:15,
   marginBottom:30,
   fontFamily:theme.fonts.title500,
   lineHeight:23

  },
});