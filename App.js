import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import screen
import HomeScreen from './src/componets/home';
import FormsScreen from './src/componets/Forms';
import UsersScreen from './src/componets/users';
import Dashboard from './src/componets/dashboard';
import Profile from './src/componets/Profile';
import Login from './src/componets/Login';


const Stack = createStackNavigator();

const globalScreenOptions = {
  
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Form" component={FormsScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Users" component={UsersScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;