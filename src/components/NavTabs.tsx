import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import AirportsStack from '../screens/Airports';
import TranslateStack from '../screens/Translate';
import SettingsStack from '../screens/Settings';
import { useTranslation } from '../utils/i18n';

const Tab = createBottomTabNavigator();

export default () => {
  const { t } = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="Translate"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        lazy:false,
      }}
    >
      <Tab.Screen
        name="TranslateStack"
        component={TranslateStack}
        options={{
          headerShown: false,
          tabBarLabel: t('screens.translate'),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AirportsStack"
        component={AirportsStack}
        options={{
          headerShown: false,
          tabBarLabel: t('screens.airports'),
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="airplane" color={color} size={size} />
          ),
          title: t('screens.airports'),
          unmountOnBlur: true,
        }}
        listeners={({ navigation }) => (
          { blur: () => navigation.setParams({ screen: undefined }) }
        )}
      />
      <Tab.Screen
        name="SettingsStack"
        component={SettingsStack}
        options={{
          headerShown: false,
          tabBarLabel: t('screens.settings'),
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
          title: t('screens.settings'),
        }}
      />
    </Tab.Navigator>
  );
};
