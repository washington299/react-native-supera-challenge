import styled from 'styled-components/native';

export default styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const FilterButton = styled.TouchableOpacity`
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

export const FilterArea = styled.View`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const FilterBox = styled.View`
  width: 100%;
  height: 60%;
  align-items: center;
  justify-content: center;
  background-color: #FFF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  bottom: 0;
`;
