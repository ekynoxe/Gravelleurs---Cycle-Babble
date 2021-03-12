import React from 'react';
import {
  StyleSheet, SafeAreaView, Text, View,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import data from '../../data/lang';

import { useSettings } from '../../utils/useSettings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    color: '#000000',
  },
});

const SettingsScreen = () => {
  const [settings, loading, error, saveSettings] = useSettings();

  return loading || error ? null : (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: -1 }}>
        <Text>Default Language</Text>
        <RadioButton.Group
          value={settings.lexiconLang}
          onValueChange={(lang) => {
            saveSettings({ lexiconLang: lang });
          }}
        >
          {
            Object.entries(data.languages).map(([key, language]) => (
              <RadioButton.Item label={language.label} key={key} value={key} />))
          }
        </RadioButton.Group>
        <Text>App Language</Text>
        <RadioButton.Group
          value={settings.appLang}
          onValueChange={(lang) => {
            saveSettings({ appLang: lang });
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
