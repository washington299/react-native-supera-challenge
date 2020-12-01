import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1e90ff',
      },
      headerTintColor: '#FFF',
      headerTitleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={{ title: 'Games' }}
    />
    <Stack.Screen
      name="Details"
      component={ShoppingCart}
      options={{ title: 'Shopping cart' }}
    />
  </Stack.Navigator>
);

export default Routes;
