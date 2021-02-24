import React, { useMemo, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { PaperTable } from '../../components/PaperTable';
import SearchBar from '../../components/SearchBar';
import data, { Language } from '../../data/lang';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    color: "#000000"
  },
})

const LexiconScreen = () => {
  const[searchTerm, setSearchTerm] = useState('');
  
  const filteredData = useMemo(() => {
    const regexp = new RegExp( searchTerm, 'gi' );
    return {
      head: Object.entries(data.languages).map(([_, language]) => language.label),
      rows: data.rows.filter((row) => {
        return row.find((word) => word.match(regexp));
      })
    }
  }, [searchTerm]);

  return <SafeAreaView style={styles.container}>
    <View style={{flex: -1}}>
      <SearchBar onChange={setSearchTerm} searchTerm={searchTerm} />
      <PaperTable data={filteredData} />
    </View>
    <StatusBar style="auto" />
  </SafeAreaView>
}

export default LexiconScreen
