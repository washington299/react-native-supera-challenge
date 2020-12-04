import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import api from '../../services/api';

import Product from '../../components/Product';
import FilterOption from '../../components/FilterOption';

import Container, {
  ProductsArea,
  FilterButton,
  FilterArea,
  FilterBox,
} from './styles';

const Home = () => {
  const [games, setGames] = useState([]);
  const [hideFilters, setHideFilters] = useState(true);
  const [activeFilter, setActiveFilter] = useState('default');

  async function getProducts() {
    const res = await api.getProducts('/products.json');
    setGames(res);
  }
  async function filterByPrice() {
    const res = await api.filterByPrice('/products.json');
    setGames(res);
  }
  async function filterByScore() {
    const res = await api.filterByScore('/products.json');
    setGames(res);
  }
  async function filterByAlphaAsc() {
    const res = await api.filterByAlphaAsc('/products.json');
    setGames(res);
  }

  useEffect(() => {
    switch (activeFilter) {
      case 'default': {
        getProducts();
        break;
      }
      case 'price': {
        filterByPrice();
        break;
      }
      case 'score': {
        filterByScore();
        break;
      }
      case 'sort-alpha-asc': {
        filterByAlphaAsc();
        break;
      }
    }
  }, [activeFilter]);

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
            <FilterOption
              setActiveFilter={() => { setActiveFilter('default'); }}
              setHideFilters={() => { setHideFilters(true); }}
              text="Ordenar por padrão"
              backgroundColor={activeFilter === 'default' ? '#1e90ff' : '#FFF'}
              icon={(
                <FoundationIcon
                  name="arrows-out"
                  size={36}
                  style={activeFilter === 'default' ? { color: '#FFF' } : { color: '#AAA' }}
                />
              )}
            />
            <FilterOption
              setActiveFilter={() => { setActiveFilter('price'); }}
              setHideFilters={() => { setHideFilters(true); }}
              text="Preço"
              backgroundColor={activeFilter === 'price' ? '#1e90ff' : '#FFF'}
              icon={(
                <FoundationIcon
                  name="dollar"
                  size={46}
                  style={activeFilter === 'price' ? { color: '#FFF' } : { color: '#AAA' }}
                />
              )}
            />
            <FilterOption
              setActiveFilter={() => { setActiveFilter('score'); }}
              setHideFilters={() => { setHideFilters(true); }}
              text="Pontuação"
              backgroundColor={activeFilter === 'score' ? '#1e90ff' : '#FFF'}
              icon={(
                <EntypoIcon
                  name="game-controller"
                  size={28}
                  style={activeFilter === 'score' ? { color: '#FFF' } : { color: '#AAA' }}
                />
              )}
            />
            <FilterOption
              setActiveFilter={() => { setActiveFilter('sort-alpha-asc'); }}
              setHideFilters={() => { setHideFilters(true); }}
              text="Ordem alfabética"
              backgroundColor={activeFilter === 'sort-alpha-asc' ? '#1e90ff' : '#FFF'}
              icon={(
                <FontAwesomeIcon
                  name="sort-alpha-asc"
                  size={28}
                  style={activeFilter === 'sort-alpha-asc' ? { color: '#FFF' } : { color: '#AAA' }}
                />
              )}
            />
          </FilterBox>
        </FilterArea>
      )}
    </Container>
  );
};

export default Home;
