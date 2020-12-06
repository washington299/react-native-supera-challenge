import styled from 'styled-components/native';

export default styled.SafeAreaView`
  flex: 1;
  padding: 20px 0;
`;

export const ProductsArea = styled.ScrollView`
  flex: 1;
  background-color: #FFF;
`;

export const Title = styled.Text`
  height: 30px;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;

export const Product = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  position: relative;
  border-style: solid;
  border-color: #CCC;
  border-top-width: 1px;
  border-bottom-width: 1px;
`;

export const ProductImg = styled.Image`
  width: 130px;
  height: 130px;
`;

export const ProductInfo = styled.View`
  justify-content: space-between;
  flex: 1;
`;

export const ProductText = styled.Text`
  font-size: 16px;
  font-weight: 600;
`;

export const ProductActions = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;
`;

export const ProductQuantity = styled.TextInput`
  border: 1px solid #DDD;
  padding: 5px 10px;
  margin: 0 10px;
`;

export const EmptyCarMsg = styled.Text`
  font-size: 20px;
  text-align: center;
`;

export const PurchaseArea = styled.View`
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: #EEE;
  border: 1px solid #000;
`;

export const PurchaseButton = styled.TouchableOpacity`
  width: 100%;
  padding: 10px 5px;
  margin-top: 10px;
  background-color: #1e90ff;
  border-radius: 5px;
`;

export const PurchaseButtonText = styled.Text`
  color: #FFF;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
`;
