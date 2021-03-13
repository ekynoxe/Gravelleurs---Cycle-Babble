import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AirportsListScreen from './AirportsList';
import AirportScreen from './Airport';
import { useTranslation } from '../../utils/i18n';

const Stack = createStackNavigator();

const AirportStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Airports"
        component={AirportsListScreen}
        options={{
          title: t('navTabs.airports'),
        }}
      />
      <Stack.Screen
        name="Airport"
        component={AirportScreen}
      />
    </Stack.Navigator>
  );
};

export default () => <AirportStack />;
