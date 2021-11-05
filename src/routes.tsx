import React from "react";
import { Feather, MaterialCommunityIcons as MaterialIcon } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import AllLists from "./pages/AllLists";
import Main from "./pages/Main";


const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          options={{ tabBarIcon: ({ color }) => <MaterialIcon name="clipboard-list" size={20} color={color}/> }}
          name="Listas"
          component={Main} 
        />
        <Tab.Screen 
          options={{ tabBarIcon: ({ color }) => <MaterialIcon name="playlist-edit" size={20} color={color}/> }}
          name="Todas as Listas" 
          component={AllLists} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}