import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import screen
import HomeScreen from './src/componets/home';
import FormsScreen from './src/componets/Forms';
import UsersScreen from './src/componets/users';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Users: {
    screen: UsersScreen,
  },
  FormsScreen: FormsScreen
});

export default createAppContainer(AppNavigator);