import React, { useContext } from 'react';
import {
  StyleSheet, SafeAreaView, Text, View,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from '../../utils/i18n';
import data from '../../data/lang';

import { SettingsContext } from '../../utils/SettingsContext';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    color: '#000000',
  },
});

const SettingsScreen = () => {
  const { t } = useTranslation();
  const { settings, updateSettings } = useContext(SettingsContext);
  const loading = false;
  const error = false;

  return loading || error ? null : (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: -1 }}>
        <Text>{ t('settings.baseLanguage') }</Text>
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
        <Text>{ t('settings.appLanguage') }</Text>
        <RadioButton.Group
          value={settings.appLang || ''}
          onValueChange={(lang) => {
            updateSettings({ appLang: lang });
          }}
        >
          {
            Object.entries(data.languages).map(([key, language]) => (
              <RadioButton.Item label={language.label} key={key} value={key} />))
          }
        </RadioButton.Group>
      </View>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default SettingsScreen;
