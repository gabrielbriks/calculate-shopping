
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react';
import { View, FlatList, Image, Text, StyleSheet, TextInput, ScrollView, StatusBar, Button } from 'react-native';
import { RootStackParamList } from '../routes/app.routes';
import * as AuthSession from 'expo-auth-session';
import * as Linking from 'expo-linking';

import {firebase, auth, database} from '../services/firebase'
import { async } from '@firebase/util';

//Type to 'navigate' working
type authScreenNavigationType = StackNavigationProp<RootStackParamList>

//Typing return of auth
type AuthResponse  = {
  type: string; // Pode ser Cancel, Sucess e etc
  params: {
    access_token: string;

  }
}

export function SignIn() {

  const [registering, setRegistering] = useState<boolean>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [confirm, setConfirm] = useState<string>();
  const [error, setError] = useState<string>();


  const navigation = useNavigation<authScreenNavigationType>();

  
  async function handleSignIn() {
    
    const CLIENT_ID = '883019786099-k7sk9lnt7tncjfjvvg44ikuiqoqq6i53.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@gabriel.morais/calculateshopping';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email'); // encode vai ajustar o espaço que colocamos ali no meio

    // const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
    
    

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

    console.log(authUrl);

    const response = await AuthSession
      .startAsync({ authUrl }) as AuthResponse;

      if(response.type == "cancel")
        navigation.navigate('SignIn');
      else 
        navigation.navigate('Home');
   
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Button 
        title='Entrar com o Google' 
        onPress={() => handleSignIn()}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    
  },

  title:{

  },

  buttonSingIn: {

  }
  
});


export default SignIn;

