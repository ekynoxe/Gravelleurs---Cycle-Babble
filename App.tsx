import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Tabs from './src/components/NavTabs';
import LoadingScreen from './src/screens/Loading';
import { useSettings } from './src/utils/useSettings';

const App = () => {
  const [, loading, error] = useSettings();

  return (
    <NavigationContainer>
      { loading || error ? <LoadingScreen /> : <Tabs /> }
    </NavigationContainer>
  );
};

export default App;
