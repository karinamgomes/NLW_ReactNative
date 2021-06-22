import React from "react";
import {
View, 
Text,
Image,
StatusBar
} from "react-native";

import { ButtonIcon } from "../../components/ButtonIcon";
import IllustrationImg from '../../assets/illustration.png';
import {styleSignIn} from "./styles";

export function SignIn(){
  return (
    <View style={styleSignIn.container}>
      <StatusBar barStyle="light-content" backgroundColor ="transparent" translucent/>
      <Image source={IllustrationImg} style={styleSignIn.image} resizeMode='stretch'></Image>
      <View style={styleSignIn.content}>

        <Text style={styleSignIn.title}>Conecte-se{`\n`}
        e organize suas{`\n`}
        jogatinas
        </Text>

        <Text style={styleSignIn.subTitle}>Crie grupos para jogar seus games{`\n`}
        favoritos com seus amigos
        </Text>
    
        <ButtonIcon title="Conecte-se com Discord" activeOpacity={0.7}/>
      </View>

    </View>
  );
}