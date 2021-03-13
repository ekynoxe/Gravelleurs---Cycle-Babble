import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SettingsScreen from './Settings';
import { useTranslation } from '../../utils/i18n';

const Stack = createStackNavigator();

const SettingsStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator headerMode="screen">
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: t('navTabs.settings'),
        }}
      />
    </Stack.Navigator>
  );
};

export default () => <SettingsStack />;
