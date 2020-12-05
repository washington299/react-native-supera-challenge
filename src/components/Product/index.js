import React, { useContext } from 'react';

import { ProductsContext } from '../../contexts/productsContext';
import formatCurrency from '../../helpers/formatCurrency';

import Container, {
  Img,
  Info,
  Name,
  Price,
  Button,
  ButtonText,
} from './styles';

const Product = ({ game }) => {
  const { dispatch } = useContext(ProductsContext);

  return (
    <Container>
      <Img source={{ uri: `http://10.0.0.16:19001/assets/${game.image}` }} />
      <Info>
        <Name>{game.name}</Name>
        <Price>
          Preço:
          {' '}
          {formatCurrency(game.price)}
        </Price>
      </Info>
      <Button onPress={() => dispatch({ type: 'ADD_PRODUCT', payload: { product: game } })}>
        <ButtonText>Adicionar ao carrinho</ButtonText>
      </Button>
    </Container>
  );
};

export default Product;
