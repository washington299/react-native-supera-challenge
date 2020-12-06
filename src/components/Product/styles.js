import styled from 'styled-components/native';

export default styled.View`
  width: 47%;
  height: auto;
  margin: 10px 5px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 200px;
`;

export const Info = styled.View`
  margin: 5px 0 0 5px;
`;

export const Name = styled.Text`
  height: 40px;
  font-size: 15px;
`;

export const Price = styled.Text`
  font-size: 15px;
  font-weight: 600;
`;

export const Button = styled.TouchableOpacity`
  width: 95%;
  background-color: #1e90ff;
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  color: #FFF;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
`;
