import React from "react";
import { Feather, MaterialCommunityIcons as MaterialIcon } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Camera from "./pages/Camera";
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
          options={{ tabBarIcon: ({ color }) => <Feather name="camera" size={20} color={color}/> }}
          name="Camera" 
          component={Camera} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}