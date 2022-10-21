import 'react-native-gesture-handler';
import React, {useState, useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Splash from '../screens/splash/Splash';
import Home from '../screens/home/Home';

import Fonts from '@theme/Fonts';
import {useTheme} from '@theme/ThemeContext';

import {enableScreens} from 'react-native-screens';
enableScreens();

const Stack = createStackNavigator();

function Router() {
  return (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

export default Router;
