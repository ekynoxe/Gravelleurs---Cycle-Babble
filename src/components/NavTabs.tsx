import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import AirportsStack from '../screens/Airports';
import LexiconStack from '../screens/Lexicon';
import SettingsStack from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default () => {
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
          tabBarLabel: 'Blah',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Airports"
        component={AirportsStack}
        options={{
          tabBarLabel: 'Vroar',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="airplane" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Whaaa?',
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}