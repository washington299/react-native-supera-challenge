import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import api from '../../services/api';

import Product from '../../components/Product';

import Container, {
  ProductsArea,
  FilterButton,
  FilterArea,
  FilterBox,
} from './styles';

const Home = () => {
  const [games, setGame] = useState([]);
  const [hideFilters, setHideFilters] = useState(true);

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
        <TouchableOpacity onPress={() => setHideFilters(false)}>
          <FilterButton>
            <Icon.Button name="filter" backgroundColor="#1e90ff" color="#FFF">
              <Text style={{ fontSize: 18, color: '#FFF' }}>Filtros</Text>
            </Icon.Button>
          </FilterButton>
        </TouchableOpacity>
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
      {!hideFilters && (
        <FilterArea>
          <FilterBox>
            <Icon.Button
              name="close"
              backgroundColor="#FFF"
              color="#AAA"
              size={28}
              style={{ alignSelf: 'flex-end' }}
              onPress={() => setHideFilters(true)}
            />
            <Text>Area dos filtros</Text>
          </FilterBox>
        </FilterArea>
      )}
    </Container>
  );
};

export default Home;
