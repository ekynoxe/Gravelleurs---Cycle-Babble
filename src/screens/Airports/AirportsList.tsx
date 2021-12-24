import React, { useMemo, useState } from 'react';
import {
  Button, FlatList, StyleSheet, SafeAreaView, Text, View, ViewStyle,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../../components/SearchBar';
import airports, { Airport } from '../../data/airports';
import flags from '../../data/flags';
import { useTranslation } from '../../utils/i18n';
import PageHeader from '../../components/PageHeader';

import { Screen, ScreenContent } from '../../styles';

const styles = StyleSheet.create({
  screen: Screen as ViewStyle,
  screenContent: ScreenContent as ViewStyle,
});

const renderAirport = ({ item: airport, navigation }:{ item: Airport, navigation: any }) => (
  <Text>
    <Button
      title={`${flags[airport.countryCode].emoji} ${airport.name}`}
      onPress={() => navigation.navigate('Airport', { airportCode: airport.code })}
    />
  </Text>
);

const AirportsListScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    const regexp = new RegExp(searchTerm, 'gi');
    return airports.filter((airport: Airport) => (
      airport.name.match(regexp) || airport.code.match(regexp)));
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.screen}>
      <PageHeader
        headerText={t('screens.airports')}
      />
      <View style={styles.screenContent}>
        <SearchBar onChange={setSearchTerm} searchTerm={searchTerm} />
        <FlatList
          data={filteredData}
          keyExtractor={(item: Airport) => `a-${item.code}`}
          renderItem={({ item }:{ item: Airport }) => renderAirport({ item, navigation })}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default AirportsListScreen;
