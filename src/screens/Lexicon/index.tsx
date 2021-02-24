import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import LexiconScreen from './Lexicon';

const Stack = createStackNavigator();

const AirportStack = () => {
  return (
    <Stack.Navigator
      headerMode="screen"
    >
      <Stack.Screen name="Lexicon" component={LexiconScreen} />
    </Stack.Navigator>
  );
};

export default () => <AirportStack />;
