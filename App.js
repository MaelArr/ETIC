import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoadingApp from "./Navigation/LoadingApp"
import Travmeejoy from "./Navigation/Travmeejoy";
import LogIn from "./Navigation/LogIn";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialState="Travmeejoy">
        <Stack.Screen name="Travmeejoy" component={Travmeejoy} />
        <Stack.Screen name="LoadingApp" component={LoadingApp} /> 
        <Stack.Screen name="LogIn" component={LogIn} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
