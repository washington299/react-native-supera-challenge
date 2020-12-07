import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { ProductsContext } from '../../contexts/productsContext';

import formatCurrency from '../../helpers/formatCurrency';

import Images from '../../styles/globalStyles';
import Container, {
  Title,
  ProductsArea,
  Product,
  ProductImg,
  ProductInfo,
  ProductText,
  ProductActions,
  ProductQuantity,
  PurchaseArea,
  PurchaseButton,
  PurchaseButtonText,
} from './styles';

const ShoppingCartList = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const navigation = useNavigation();

  const ship = state.total < 250 ? state.quantity * state.shipPerProduct : 0;

  return (
    <Container>
      <ProductsArea>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'center',
          width: '100%',
          marginTop: 20,
          marginBottom: 20,
        }}
        >
          <Title>Jogos no carrinho</Title>
          <EntypoIcon name="game-controller" size={24} style={{ color: '#000', marginLeft: 10 }} />
        </View>
        {state.quantity === 0 && <Text style={{ textAlign: 'center' }}>Carrinho vazio...</Text>}
        {state.products.map((product) => (
          <Product key={product.id}>
            <ProductImg source={Images.games[product.image]} />
            <ProductInfo>
              <ProductText>{product.name}</ProductText>
              <ProductText>{formatCurrency(product.price)}</ProductText>
              <ProductActions>
                <TouchableOpacity onPress={() => dispatch({ type: product.quantity === 1 ? 'REMOVE_PRODUCT' : 'DECREASE', payload: { product } })}>
                  <MaterialIcon name="remove-circle-outline" color="#F00" size={40} />
                </TouchableOpacity>
                <ProductQuantity editable={false}>{product.quantity}</ProductQuantity>
                <TouchableOpacity onPress={() => dispatch({ type: 'INCREASE', payload: { product } })}>
                  <MaterialIcon name="add-circle-outline" color="#0A0" size={40} />
                </TouchableOpacity>
              </ProductActions>
            </ProductInfo>
          </Product>
        ))}
      </ProductsArea>
      {state.quantity > 0 && (
        <PurchaseArea>
          <ProductText style={{ margin: 5 }}>
            {`Frete: ${ship === 0 ? 'Grátis' : formatCurrency(ship)}`}
          </ProductText>
          <ProductText style={{ margin: 5 }}>{`Subtotal: ${formatCurrency(state.total)}`}</ProductText>
          <ProductText style={{ margin: 5 }}>
            {`Total: ${formatCurrency(state.total + ship)}`}
          </ProductText>
          <PurchaseButton onPress={() => {
            alert('Compra finalizada com sucesso 😄');
            navigation.navigate('Home');
          }}
          >
            <PurchaseButtonText>Finalizar compra</PurchaseButtonText>
          </PurchaseButton>
        </PurchaseArea>
      )}
    </Container>
  );
};

export default ShoppingCartList;
