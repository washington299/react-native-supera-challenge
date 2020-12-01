import React from 'react';
import { Text } from 'react-native';

import Container, { FilterArea } from './styles';

const Home = () => (
  <Container>
    <FilterArea>
      <Text>Filter</Text>
    </FilterArea>
  </Container>
);

export default Home;
