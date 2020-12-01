import React from 'react';
import { TouchableOpacity } from 'react-native';

import CartIcon from '../../../assets/cart-icon.svg';

const ShoppingCartIcon = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('Shopping Cart')}>
    <CartIcon />
  </TouchableOpacity>
);

export default ShoppingCartIcon;
