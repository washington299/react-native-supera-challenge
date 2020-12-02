import React from 'react';

import formatCurrency from '../../helpers/formatCurrency';

import Container, {
  Img,
  Info,
  Name,
  Price,
  Button,
  ButtonText,
} from './styles';

const Product = ({ img, name, price }) => (
  <Container>
    <Img source={{ uri: `http://10.0.0.16:19001/assets/${img}` }} />
    <Info>
      <Name>{name}</Name>
      <Price>
        Preço:
        {' '}
        {formatCurrency(price)}
      </Price>
    </Info>
    <Button onPress={() => alert('Adicionado')}>
      <ButtonText>Adicionar ao carrinho</ButtonText>
    </Button>
  </Container>
);

export default Product;
