import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen'
import MovieSCreen from '../screens/MovieSCreen'
import PersonScreen from '../screens/PersonScreen'

const Stack=createNativeStackNavigator()

export default function AppNavigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' options={{headerShown:false}} component={HomeScreen}/>
            <Stack.Screen name='Movies' options={{headerShown:false}} component={MovieSCreen}/>
            <Stack.Screen name='Person' options={{headerShown:false}} component={PersonScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({})