import React from 'react';
import { Text } from 'react-native';

import Container, { Option } from './styles';

const FilterOption = ({
  icon, text, backgroundColor, setActiveFilter, setHideFilters, filter,
}) => {
  function setActions() {
    setActiveFilter();
    setHideFilters();
    filter();
  }

  return (
    <Container onPress={setActions}>
      <Option style={{ backgroundColor }}>{icon}</Option>
      <Text>{text}</Text>
    </Container>
  );
};

export default FilterOption;
