import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import api from '../../services/api';

import Product from '../../components/Product';

import Container, { FilterArea, ProductsArea } from './styles';

const Home = () => {
  const [games, setGame] = useState([]);

  useEffect(() => {
    async function getProducts() {
      const res = await api.getProducts('/products.json');
      setGame(res);
    }
    getProducts();
  }, []);

  return (
    <Container>
      <ScrollView>
        <FilterArea>
          <Icon.Button name="filter" backgroundColor="#1e90ff" color="#FFF">
            <Text style={{ fontSize: 18, color: '#FFF' }}>Filtros</Text>
          </Icon.Button>
        </FilterArea>
        <ProductsArea>
          {games.map((game) => (
            <Product
              key={game.id}
              img={game.image}
              name={game.name}
              price={game.price}
            />
          ))}
        </ProductsArea>
      </ScrollView>
    </Container>
  );
};

export default Home;
