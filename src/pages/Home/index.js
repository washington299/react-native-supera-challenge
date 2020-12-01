import React from 'react';
import { Button, Text, View } from 'react-native';

const Home = ({ navigation }) => (
  <View>
    <Text>Hello World</Text>
    <Button
      title="Go to details"
      onPress={() => {
        navigation.navigate('Details', {
          itemId: Math.floor(Math.random() * 100),
          name: 'Washington Campos',
        });
      }}
    />
  </View>
);

export default Home;
