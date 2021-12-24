import React, { useContext, useEffect, useState } from 'react';
import { createURL } from 'expo-linking';
import { LinkingOptions, NavigationContainer, NavigatorScreenParams } from '@react-navigation/native';

import Tabs from './components/NavTabs';
import LoadingScreen from './screens/Loading';
import { initI18n } from './utils/i18n';
import languageDetector from './utils/languageDetector';

import { SettingsContext } from './utils/SettingsContext';

type AirportParamList = {
  Airports: undefined
  Airport: undefined
}

type RootStackParamList = {
  AirportsStack: NavigatorScreenParams<AirportParamList>
  LexiconStack: undefined
  SettingsStack: undefined
}

const config = {
  screens: {
    AirportsStack: {
      screens: {
        Airports: 'airports',
        Airport: 'airport/:airportCode',
      },
    },
    LexiconStack: {
      screens: {
        Lexicon: 'lexicon',
      },
    },
    SettingsStack: {
      screens: {
        Settings: 'settings',
      },
    },
  },
};

const App = () => {
  const {
    error: errorSettings,
    loading: loadingSettings,
    settings,
  } = useContext(SettingsContext);
  const [isReady, setIsReady] = useState(false);
  const prefix = createURL('/');

  const linking: LinkingOptions<RootStackParamList> = {
    prefixes: [prefix],
    config,
  };

  useEffect(() => {
    setIsReady(false);
    initI18n(languageDetector).then((instance) => {
      instance.changeLanguage(settings.appLang);
      setIsReady(true);
    });
  }, [settings, loadingSettings, errorSettings]);

  return (
    <NavigationContainer linking={linking}>
      { !isReady || loadingSettings || errorSettings ? <LoadingScreen /> : <Tabs /> }
    </NavigationContainer>
  );
};

export default App;
