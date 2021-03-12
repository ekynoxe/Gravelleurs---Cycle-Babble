import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const writeData = async (key: string, value: any) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

const readData = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export type Settings = {
  appLang: string;
  lexiconLang: string;
};

export type UseSettingsProps = [
  Settings,
  boolean,
  typeof Error | null,
  any,
];

const baseSettings = { appLang: 'GB', lexiconLang: 'GB' };

export const useSettings = () : UseSettingsProps => {
  const [settings, setSettings] = useState(baseSettings);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function readSettingsOnce() {
    try {
      const savedSettings = await readData('settings');
      if (savedSettings) {
        setSettings(savedSettings);
      }
      setLoading(false);
    } catch (e) {
      setError(e);
      setLoading(false);
    }
  }

  async function writeSettings(data: Settings) {
    try {
      await writeData('settings', data);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    readSettingsOnce();
  }, []);

  useEffect(() => {
    writeSettings(settings);
  }, [settings]);

  const updateSettings = (newSettings: any) => {
    setSettings({ ...settings, ...newSettings });
  };

  return [settings, loading, error, updateSettings];
};
