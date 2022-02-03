import React, { useContext } from 'react';
import { Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from '../../utils/i18n';
import data from '../../data/lang';
import Screen from '../../components/Screen';

import { SettingsContext } from '../../utils/SettingsContext';

const SettingsScreen = () => {
  const { t } = useTranslation();
  const { settings, updateSettings } = useContext(SettingsContext);
  const loading = false;
  const error = false;

  return loading || error ? null : (
    <Screen headerText={t('screens.settings')}>
      <Text>{ t('settings.appLanguage') }</Text>
      <RadioButton.Group
        value={settings.appLang || ''}
        onValueChange={(lang) => {
          updateSettings({ appLang: lang });
        }}
      >
        {
          Object.keys(data.app).map((key) => (
            <RadioButton.Item label={data.languages[key].label} key={key} value={key} />))
        }
      </RadioButton.Group>
      <Text>{ t('settings.baseLanguageForTranslation') }</Text>
      <RadioButton.Group
        value={settings.baseLang || ''}
        onValueChange={(lang) => {
          updateSettings({ baseLang: lang });
        }}
      >
        {
          Object.entries(data.languages).map(([key, language]) => (
            <RadioButton.Item label={language.label} key={key} value={key} />))
        }
      </RadioButton.Group>
      <StatusBar style="auto" />
    </Screen>
  );
};

export default SettingsScreen;
