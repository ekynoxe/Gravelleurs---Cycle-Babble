import React, { useContext, useEffect, useMemo, useState } from 'react';
import {
  StyleSheet, SafeAreaView, View, ViewStyle,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PaperTable from '../../components/PaperTable';
import SearchBar from '../../components/SearchBar';
import data from '../../data/lang';
import PageHeader from '../../components/PageHeader';
import { useTranslation } from '../../utils/i18n';
import { Column, Lang } from '../../types'

import { SettingsContext } from '../../utils/SettingsContext';

import { Screen, ScreenContent } from '../../styles';

const styles = StyleSheet.create({
  screen: Screen as ViewStyle,
  screenContent: ScreenContent as ViewStyle,
});

const TranslateScreen = () => {
  const { t } = useTranslation();
  const { settings: { baseLang } } = useContext(SettingsContext);
  const [searchTerm, setSearchTerm] = useState('');

  const sortedLanguages = useMemo(() => 
    Object.keys(data.languages).sort((A: string, B: string) => {
      if (A === baseLang) { return -1 }
      if (B === baseLang) { return 1 }
      return A > B ? 1 : A < B ? -1 : 0
    })
  , [baseLang])

  const colDefs: Column[] = useMemo(() => {
    const order: Column[] = [];
    sortedLanguages.forEach((lang: string) => {
      order.push({
        header: data.languages[lang].label,
        key: lang as Lang,
      });
    })

    return order
  }, [sortedLanguages])

  const filteredData = useMemo(() => {
    const regexp = new RegExp(searchTerm, 'gi');
    return data.translations.filter((words) => Object.values(words).find((word) => word.match(regexp)));
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.screen}>
      <PageHeader
        headerText={t('screens.translate')}
      />
      <View style={styles.screenContent}>
        <SearchBar onChange={setSearchTerm} searchTerm={searchTerm} />
        <PaperTable data={filteredData} colDefs={colDefs} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default TranslateScreen;
