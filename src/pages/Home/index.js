import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Container, { FilterArea, ProductsArea, Product } from './styles';

const Home = () => (
  <Container>
    <FilterArea>
      <Text>Filter</Text>
    </FilterArea>
    <ScrollView>
      <ProductsArea>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductsArea>
    </ScrollView>
  </Container>
);

export default Home;
