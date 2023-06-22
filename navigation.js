import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import React from 'react'
import HomeScreen from './screens/HomeScreen';

export default function Navigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }