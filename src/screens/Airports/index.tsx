import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AirportsListScreen from './AirportsList';
import AirportScreen from './Airport';

const Stack = createStackNavigator();

const AirportStack = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen name="Airports" component={AirportsListScreen} />
    <Stack.Screen name="Airport" component={AirportScreen} />
  </Stack.Navigator>
);

export default () => <AirportStack />;
