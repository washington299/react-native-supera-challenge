import React, { useContext } from 'react';
import { View } from 'react-native';
import EntypoIcon from 'react-native-vector-icons/Entypo';

import { ProductsContext } from '../../contexts/productsContext';

import formatCurrency from '../../helpers/formatCurrency';

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
  const { state } = useContext(ProductsContext);

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
        {state.products.map((product) => (
          <Product key={product.id}>
            <ProductImg source={{ uri: `http://10.0.0.16:19001/assets/${product.image}` }} />
            <ProductInfo>
              <ProductText>{product.name}</ProductText>
              <ProductText>{formatCurrency(product.price)}</ProductText>
              <ProductActions>
                <ProductQuantity>0</ProductQuantity>
              </ProductActions>
            </ProductInfo>
          </Product>
        ))}
      </ProductsArea>
      <PurchaseArea>
        <ProductText style={{ margin: 5 }}>{`Frete: ${formatCurrency(30)}`}</ProductText>
        <ProductText style={{ margin: 5 }}>{`Total: ${formatCurrency(0)}`}</ProductText>
        <PurchaseButton>
          <PurchaseButtonText>Finalizar compra</PurchaseButtonText>
        </PurchaseButton>
      </PurchaseArea>
    </Container>
  );
};

export default ShoppingCartList;
