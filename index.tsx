import React from 'react';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from './src/App';

import { SettingsProvider } from './src/utils/SettingsContext';

const Root = () => (
  <SettingsProvider>
    <App />
  </SettingsProvider>
);

registerRootComponent(Root);
