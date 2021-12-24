import React, { useMemo, useState } from 'react';
import {
  StyleSheet, SafeAreaView, View, ViewStyle,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PaperTable from '../../components/PaperTable';
import SearchBar from '../../components/SearchBar';
import data from '../../data/lang';
import PageHeader from '../../components/PageHeader';
import { useTranslation } from '../../utils/i18n';

import { Screen, ScreenContent } from '../../styles';

const styles = StyleSheet.create({
  screen: Screen as ViewStyle,
  screenContent: ScreenContent as ViewStyle,
});

const TranslateScreen = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    const regexp = new RegExp(searchTerm, 'gi');
    return {
      head: Object.entries(data.languages).map(([, language]) => language.label),
      rows: data.translate.filter((row) => row.find((word) => word.match(regexp))),
    };
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.screen}>
      <PageHeader
        headerText={t('screens.translate')}
      />
      <View style={styles.screenContent}>
        <SearchBar onChange={setSearchTerm} searchTerm={searchTerm} />
        <PaperTable data={filteredData} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default TranslateScreen;
