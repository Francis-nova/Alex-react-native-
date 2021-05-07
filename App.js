import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// import screen
import HomeScreen from './src/componets/home';
import FormsScreen from './src/componets/Forms';
import UsersScreen from './src/componets/users';
import Dashboard from './src/componets/dashboard';


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Users: {
    screen: UsersScreen,
  },
  FormsScreen: FormsScreen,
  Dashboard: Dashboard
});

export default createAppContainer(AppNavigator);