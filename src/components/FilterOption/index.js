import React from 'react';
import { Text } from 'react-native';

import Container, { Option } from './styles';

const FilterOption = ({
  icon, text, backgroundColor, setActiveFilter, setHideFilters,
}) => {
  function setActions() {
    setActiveFilter();
    setHideFilters();
  }

  return (
    <Container onPress={setActions}>
      <Option style={{ backgroundColor }}>{icon}</Option>
      <Text>{text}</Text>
    </Container>
  );
};

export default FilterOption;
