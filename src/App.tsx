import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './components/NavTabs';
import LoadingScreen from './screens/Loading';
import { initI18n } from './utils/i18n';
import languageDetector from './utils/languageDetector';

import { SettingsContext } from './utils/SettingsContext';

const App = () => {
  const {
    error: errorSettings,
    loading: loadingSettings,
    settings,
  } = useContext(SettingsContext);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);
    initI18n(languageDetector).then((instance) => {
      instance.changeLanguage(settings.appLang);
      setIsReady(true);
    });
  }, [settings, loadingSettings, errorSettings]);

  return (
    <NavigationContainer>
      { !isReady || loadingSettings || errorSettings ? <LoadingScreen /> : <Tabs /> }
    </NavigationContainer>
  );
};

export default App;
