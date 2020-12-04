import React from 'react';
import { TouchableOpacity } from 'react-native';

import CartIcon from '../../../assets/cart-icon.svg';

import { CartQuantity, CartQuantityValue } from './styles';

const ShoppingCartIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Shopping')}>
    <CartIcon />
    <CartQuantity>
      <CartQuantityValue>0</CartQuantityValue>
    </CartQuantity>
  </TouchableOpacity>
);

export default ShoppingCartIcon;
