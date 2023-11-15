import React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import SignUpUser from "./src/users/register"
import LoginUser from './src/auth/login'
import LogoScreen from "./src/components/logo"

const Stack = createStackNavigator();

const app =()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="LogoScreen" 
      screenOptions={{headerShown : false}}
      >
        <Stack.Screen name="LogoScreen" component={LogoScreen} />
        <Stack.Screen name="SignUpuser" component={SignUpUser} />
        <Stack.Screen name="LoginUser" component={LoginUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default app;