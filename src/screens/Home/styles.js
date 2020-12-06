import styled from 'styled-components/native';

export default styled.View`
  flex: 1;
  background-color: #FFF;
`;

export const FilterButton = styled.TouchableOpacity`
  width: 120px;
  margin: 20px 0 0 20px;
  border: 1px solid #DDD;
  border-radius: 5px;
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
  justify-content: flex-end;
  position: absolute;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const FilterBox = styled.View`
  width: 100%;
  height: 60%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #FFF;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
