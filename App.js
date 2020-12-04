import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import ProductsProvider from './src/contexts/productsContext';

import Routes from './src/routes';

export default function App() {
  return (
    <ProductsProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar style="light" />
      </NavigationContainer>
    </ProductsProvider>
  );
}
