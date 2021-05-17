import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';


// import screen
import HomeScreen from './src/componets/home';
import FormsScreen from './src/componets/Forms';
import UsersScreen from './src/componets/users';
import Dashboard from './src/componets/dashboard';
import Profile from './src/componets/Profile';
import Login from './src/componets/Login';
import Beneficiary from './src/componets/beneficiary';


const Stack = createStackNavigator();

const globalScreenOptions = {
  
}

function App() {
  const [fontsLoaded, setfontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'OpenSans': {
        uri: require('./src/fonts/OpenSans-Regular.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },

      'OpenSans-Bold': {
        uri: require('./src/fonts/OpenSans-Bold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });
    setfontsLoaded(true)
  }



  useEffect(() => {
    loadFonts()
  }, [])

  if(fontsLoaded) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={globalScreenOptions}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Form" component={FormsScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Users" component={UsersScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="BenDetails" component={Beneficiary} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    );

  } else {
    return null;
  }

}

export default App;