import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LexiconScreen from './Lexicon';
import { useTranslation } from '../../utils/i18n';

const Stack = createStackNavigator();

const LexiconStack = () => {
  const { t } = useTranslation();
  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="Lexicon"
    >
      <Stack.Screen
        name="Lexicon"
        component={LexiconScreen}
        options={{
          title: t('navTabs.lexicon'),
        }}
      />
    </Stack.Navigator>
  );
};

export default () => <LexiconStack />;
