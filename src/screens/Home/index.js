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
            <FilterOption
              text="Ordenar por padrão"
              icon={<FoundationIcon name="arrows-out" size={30} />}
            />
            <FilterOption
              text="Preço"
              icon={<FoundationIcon name="dollar" size={46} />}
            />
            <FilterOption
              text="Pontuação"
              icon={<EntypoIcon name="game-controller" size={28} />}
            />
            <FilterOption
              text="Ordem alfabética"
              icon={<FontAwesomeIcon name="sort-alpha-asc" size={28} />}
            />
          </FilterBox>
        </FilterArea>
      )}
    </Container>
  );
};

export default Home;
