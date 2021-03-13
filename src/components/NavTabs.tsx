import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import AirportsStack from '../screens/Airports';
import LexiconStack from '../screens/Lexicon';
import SettingsStack from '../screens/Settings';
import { useTranslation } from '../utils/i18n';

const Tab = createBottomTabNavigator();

export default () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Lexicon"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Lexicon"
        component={LexiconStack}
        options={{
          tabBarLabel: t('navTabs.lexicon'),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Airports"
        component={AirportsStack}
        options={{
          tabBarLabel: t('navTabs.airports'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="airplane" color={color} size={size} />
          ),
          title: t('navTabs.airports'),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: t('navTabs.settings'),
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
          title: t('navTabs.settings'),
        }}
      />
    </Tab.Navigator>
  );
};
