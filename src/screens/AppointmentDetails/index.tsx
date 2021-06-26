import React from "react";

import {View,ImageBackground, Text, FlatList} from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import { Fontisto } from "@expo/vector-icons"; 

import { Background } from '../../components/Background';
import { ListHeader } from '../../components/ListHeader';
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";

import BannerImg from '../../assets/banner.png';
import { styles } from "./styles";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails(){
  const members = [{
  id: '1', 
  userName:'Karina', 
  avatarUrl:'https://github.com/karinamgomes.png',
  status: 'online',
},
{
  id: '2', 
  userName:'Jonas', 
  avatarUrl:'https://github.com/joonas55s.png',
  status: 'offline',
}];

  return(
    <Background>
       <Header title="Detalhes" action={
         <BorderlessButton>
           <Fontisto name="share" size={24} color={theme.colors.primary}>

           </Fontisto>
         </BorderlessButton>
       }/>
      <ImageBackground source={BannerImg} style={styles.banner}>
       <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>É hoje que vamos chegar ao challenger sem perder uma partida da m10</Text>
        </View>
      </ImageBackground>

      <ListHeader title="Jogadores" subtitle="Total 3"></ListHeader>

      <FlatList data={members} 
      keyExtractor={item => item.id} 
      renderItem={({item})=>(
        <Member data={item}/>
      )}
      ItemSeparatorComponent={() => <ListDivider/>}
      style={styles.members}
      />

        <View style={styles.footer}>
          <ButtonIcon title="Entrar na partida"/>
          </View>
    </Background>
  );
}