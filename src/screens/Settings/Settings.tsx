import React, { useEffect, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { RadioButton, TouchableRipple } from 'react-native-paper';
import { StatusBar } from 'expo-status-bar';
import data, { Language } from '../../data/lang';

import { readData, writeData } from '../../utils/useSettings';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    color: "#000000"
  },
})

const SettingsScreen = () => {
  const [settings, setSettings] = useState({ defaultLang: 'GB'});

  useEffect(() => {
    const readSetings = async () => {
      const settings = await readData('settings');
      setSettings(settings);
    };

    readSetings();
  }, [])

  return <SafeAreaView style={styles.container}>
    <View style={{flex: -1}}>
      <Text>{ JSON.stringify(settings) }</Text>
      <RadioButton.Group
        value={settings.defaultLang}
        onValueChange={(lang) => {
          writeData('settings', { defaultLang: lang });
          setSettings({ defaultLang: lang })
        }}
      >
      {
        Object.entries(data.languages).map(([key, language]) => {
          return <RadioButton.Item label={language.label} value={key} />;
        })
      }
      </RadioButton.Group>
    </View>
    <StatusBar style="auto" />
  </SafeAreaView>
}

export default SettingsScreen
