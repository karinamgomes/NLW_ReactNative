import {StyleSheet} from 'react-native';
import { theme } from '../../global/styles.ts/theme';

export const styleSignIn = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor: theme.colors.background,
    alignItems: 'center'
  },
  image:{
    width:'100%',
    height:360

  },
  content:{
    marginTop:-45,
   // paddingHorizontal:50

  },
  title:{
   color:theme.colors.heading,
   textAlign:'center',
   fontSize:35,
   marginBottom:8
  },
  subTitle:{
   color:theme.colors.heading,
   textAlign:'center',
   fontSize:15,
   marginBottom:38
  },
});