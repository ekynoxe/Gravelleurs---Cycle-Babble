import React, { useMemo, useState } from 'react';
import {
  Button, FlatList, StyleSheet, SafeAreaView, Text, View,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import SearchBar from '../../components/SearchBar';
import airports, { Airport } from '../../data/airports';
import flags from '../../data/flags';
import PageHeader from '../../components/PageHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    color: '#000000',
  },
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
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = useMemo(() => {
    const regexp = new RegExp(searchTerm, 'gi');
    return airports.filter((airport: Airport) => (
      airport.name.match(regexp) || airport.code.match(regexp)));
  }, [searchTerm]);

  return (
    <SafeAreaView style={styles.container}>
      <PageHeader
        headerText="Airports"
      />
      <View style={{ flex: -1 }}>
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
