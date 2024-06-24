import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Introduction/Splash';
import Home from '../screens/Home/Home';

const Stack = createNativeStackNavigator();

const RootStack: React.FC = () => (
  <Stack.Navigator
    initialRouteName="Splash"
    screenOptions={{gestureEnabled: false}}>
    <Stack.Screen
      name="Splash"
      component={Splash}
      options={{title: 'Splash', headerShown: false}}
    />
    <Stack.Screen
      name="Home"
      component={Home}
      options={{title: 'Home', headerShown: false, headerLeft: () => null}}
    />
  </Stack.Navigator>
);

export default RootStack;
