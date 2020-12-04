import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { ProductsContext } from '../../contexts/productsContext';

import CartIcon from '../../../assets/cart-icon.svg';
import { CartQuantity, CartQuantityValue } from './styles';

const ShoppingCartIcon = ({ navigation }) => {
  const { state } = useContext(ProductsContext);

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Shopping')}>
      <CartIcon />
      <CartQuantity>
        <CartQuantityValue>{state.quantity}</CartQuantityValue>
      </CartQuantity>
    </TouchableOpacity>
  );
};

export default ShoppingCartIcon;
