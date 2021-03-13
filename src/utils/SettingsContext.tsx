import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const writeData = async (key: string, value: Settings) => {
  const jsonValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, jsonValue);
};

const readData = async (key: string) => {
  const jsonValue = await AsyncStorage.getItem(key);
  return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export type Settings = {
  appLang?: string;
  baseLang?: string;
};

export interface SettingsContextInterface {
  loading: boolean;
  error: Error | undefined;
  settings: Settings;
  updateSettings: (settings: Settings) => void;
}

export const SettingsContext = createContext<SettingsContextInterface>(
  {} as SettingsContextInterface,
);

const baseSettings = { appLang: 'en', baseLang: 'en' };

export const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useState<Settings>(baseSettings);
  const [error, setError] = useState();
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

  function updateSettings(data: Settings) {
    try {
      const newSettings = { ...settings, ...data };
      writeData('settings', newSettings);
      setSettings(newSettings);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    readSettingsOnce();
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        error,
        loading,
        settings,
        updateSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
