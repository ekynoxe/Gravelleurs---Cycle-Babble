import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import LexiconStack from '../screens/Lexicon';
import AirportsStack from '../screens/Airports';

const Tab = createBottomTabNavigator();

export default () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
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
    </Tab.Navigator>
  );
}