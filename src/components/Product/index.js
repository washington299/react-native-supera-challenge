import React from 'react';
import { Image } from 'react-native';

import Container from './styles';

const Product = ({ img }) => (
  <Container>
    <Image style={{ width: '100%', height: '100%' }} source={{ uri: `http://10.0.0.16:19001/assets/${img}` }} />
  </Container>
);

export default Product;
