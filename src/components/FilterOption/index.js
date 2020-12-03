import React from 'react';
import { Text } from 'react-native';

import Container, { Option } from './styles';

const FilterOption = ({ icon, text }) => (
  <Container>
    <Option>
      {icon}
    </Option>
    <Text>{text}</Text>
  </Container>
);

export default FilterOption;
