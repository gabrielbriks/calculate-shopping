/**
 * Aqui é o que chamamos de "Conxto de navegação"
 */

import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import SignIn  from '../pages/SignIn';
import { AppRoutes } from './app.routes';

const { Navigator, Screen } = createStackNavigator();


export function Routes(){
  return(
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  )
}