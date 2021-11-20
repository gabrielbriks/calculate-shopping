/**
 * Aqui é a definição de estrutura de navegação do nosso app
 * 
 */
import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
//  import { authorization } from '../services/firebase';

import SignIn  from '../pages/SignIn';
import Main from '../pages/Main';

export type RootStackParamList = {
  Main: undefined;
  'SignIn': undefined;
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

interface User{
  id: string | null;
}




export function AppRoutes(){
  
  const user: User = {id: null};
  console.log('Index Router >> User', user );

  return(
    <Stack.Navigator 
      screenOptions={{
        headerShown: false,
        cardStyle:{
          backgroundColor: 'transparent'
        }
      }}
    >
      <Stack.Screen name='SignIn' component={SignIn}/>
      <Stack.Screen name='Home' component={Main}/>
     {/* user.id  == null? <AppRoutes /> : <SignIn />  */}
    </Stack.Navigator>
  )
}

















// import React from "react";
// import { Feather, MaterialCommunityIcons as MaterialIcon } from "@expo/vector-icons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";

// import AllLists from "../pages/AllLists";
// import Main from "../pages/Main";


// const Tab = createBottomTabNavigator();

// export default function AppRoutes() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen 
//           options={{ tabBarIcon: ({ color }) => <MaterialIcon name="clipboard-list" size={20} color={color}/> }}
//           name="Listas"
//           component={Main} 
//         />
//         <Tab.Screen 
//           options={{ tabBarIcon: ({ color }) => <MaterialIcon name="playlist-edit" size={20} color={color}/> }}
//           name="Todas as Listas" 
//           component={AllLists} 
//         />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }