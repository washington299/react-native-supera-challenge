import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

import Product from '../../components/Product';

import Container, { FilterArea, ProductsArea } from './styles';

const Home = () => {
  const [games, setGame] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await axios.get('http://10.0.0.16:19001/products.json');
      setGame(res.data);
    }
    getProducts();
  }, []);

  return (
    <Container>
      <FilterArea>
        <Text>Filter</Text>
      </FilterArea>
      <ScrollView>
        <ProductsArea>
          {games.map((game) => (
            <Product key={game.id} img={game.image} />
          ))}
        </ProductsArea>
      </ScrollView>
    </Container>
  );
};

export default Home;
