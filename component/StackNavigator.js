import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DogScreen from '../screens/DogScreen';
import CatScreen from '../screens/CatScreen';
import FishScreen from '../screens/Fish';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{headerShown: false}}>
                <Stack.Screen name='HomeScreen' component={HomeScreen}/>
                <Stack.Screen name='DogScreen' component={DogScreen}/>
                <Stack.Screen name='CatScreen' component={CatScreen}/>
                <Stack.Screen name='FishScreen' component={FishScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;