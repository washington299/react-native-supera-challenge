import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

import Product from '../../components/Product';

import Container, {
  ProductsArea,
  FilterButton,
  FilterArea,
  FilterBox,
  FilterOptions,
  Option,
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
            <AntDesignIcon.Button name="filter" backgroundColor="#1e90ff" color="#FFF">
              <Text style={{ fontSize: 18, color: '#FFF' }}>Filtros</Text>
            </AntDesignIcon.Button>
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
            <AntDesignIcon
              name="close"
              backgroundColor="#FFF"
              color="#AAA"
              size={28}
              style={{
                alignSelf: 'flex-end',
                position: 'absolute',
                top: 5,
                right: 5,
              }}
              onPress={() => setHideFilters(true)}
            />
            <FilterOptions>
              <Option>
                <FoundationIcon name="arrows-out" backgroundColor="#FFF" color="#AAA" size={30} />
              </Option>
              <Text>Ordenar por padrão</Text>
            </FilterOptions>
            <FilterOptions>
              <Option>
                <FoundationIcon name="dollar" backgroundColor="#FFF" color="#AAA" size={46} />
              </Option>
              <Text>Preço</Text>
            </FilterOptions>
            <FilterOptions>
              <Option>
                <EntypoIcon name="game-controller" backgroundColor="#FFF" color="#AAA" size={28} />
              </Option>
              <Text>Pontuação</Text>
            </FilterOptions>
            <FilterOptions>
              <Option>
                <FontAwesomeIcon name="sort-alpha-asc" backgroundColor="#FFF" color="#AAA" size={28} />
              </Option>
              <Text>Ordem alfabética</Text>
            </FilterOptions>
          </FilterBox>
        </FilterArea>
      )}
    </Container>
  );
};

export default Home;
