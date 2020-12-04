import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';

import { ProductsContext } from '../../contexts/productsContext';

const ShoppingCartList = () => {
  const { state } = useContext(ProductsContext);

  return (
    <View>
      {state.products.map((product) => (
        <View key={product.id}>
          <Image style={{ width: 50, height: 50 }} source={{ uri: `http://10.0.0.16:19001/assets/${product.image}` }} />
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
        </View>
      ))}
    </View>
  );
};

export default ShoppingCartList;
