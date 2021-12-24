import React, { useMemo, useState } from 'react';
import {
  StyleSheet, SafeAreaView, View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import PaperTable from '../../components/PaperTable';
import SearchBar from '../../components/SearchBar';
import data from '../../data/lang';
import PageHeader from '../../components/PageHeader';
import { useTranslation } from '../../utils/i18n';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    color: '#000000',
  },
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
    <SafeAreaView style={styles.container}>
      <PageHeader
        headerText={t('screens.translate')}
      />
      <View style={{ flex: -1 }}>
        <SearchBar onChange={setSearchTerm} searchTerm={searchTerm} />
        <PaperTable data={filteredData} />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default TranslateScreen;
