import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TranslateScreen from './Translate';
import { useTranslation } from '../../utils/i18n';

const Stack = createStackNavigator();

const TranslateStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      initialRouteName="Translate"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Translate"
        component={TranslateScreen}
        options={{
          title: t('screens.translate'),
        }}
      />
    </Stack.Navigator>
  );
};

export default () => <TranslateStack />;
