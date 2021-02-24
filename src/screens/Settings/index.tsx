import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from './Settings';

const Stack = createStackNavigator();

const AirportStack = () => {
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default () => <AirportStack />;
