import React, { useContext } from 'react';
import {
  StyleSheet, SafeAreaView, Text, View, ViewStyle,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import { useTranslation } from '../../utils/i18n';
import data from '../../data/lang';
import PageHeader from '../../components/PageHeader';

import { SettingsContext } from '../../utils/SettingsContext';

import { Screen, ScreenContent } from '../../styles';

const styles = StyleSheet.create({
  screen: Screen as ViewStyle,
  screenContent: ScreenContent as ViewStyle,
});

const SettingsScreen = () => {
  const { t } = useTranslation();
  const { settings, updateSettings } = useContext(SettingsContext);
  const loading = false;
  const error = false;

  return loading || error ? null : (
    <SafeAreaView style={styles.screen}>
      <PageHeader
        headerText={t('screens.settings')}
      />
      <View style={styles.screenContent}>
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
