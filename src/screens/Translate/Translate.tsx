import React, { useContext, useMemo, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import PaperTable from '../../components/PaperTable';
import SearchBar from '../../components/SearchBar';
import data from '../../data/lang';
import Screen from '../../components/Screen';
import { useTranslation } from '../../utils/i18n';
import { Column, Lang } from '../../types'

import { SettingsContext } from '../../utils/SettingsContext';

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

  return (
    <Screen headerText={t('screens.translate')} noScroll>
      <SearchBar onChange={setSearchTerm} searchTerm={searchTerm} />
      <PaperTable data={data.translations} colDefs={colDefs} search={searchTerm} />
      <StatusBar style="auto" />
    </Screen>
  );
};

export default TranslateScreen;
