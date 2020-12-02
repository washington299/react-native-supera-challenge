import styled from 'styled-components/native';

export default styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const FilterArea = styled.TouchableOpacity`
  width: 120px;
  justify-content: center;
  margin: 20px;
  border: 1px solid #DDD;
  border-radius: 8px;
`;

export const ProductsArea = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 10px;
`;
