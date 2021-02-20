import React, { useMemo, useState } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { PaperTable } from '../components/PaperTable';
import SearchBar from '../components/SearchBar';
import data from '../lang';

const ListScreen = () => {
  const[searchTerm, setSearchTerm] = useState('');
  
  const filteredData = useMemo(() => {
    const regexp = new RegExp( searchTerm, 'gi' );
    return {
      head: data.head,
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    color: "#000000"
  },
  textStyle: {
    marginHorizontal: 20,
    marginVertical: 10
  }
})

export default ListScreen
