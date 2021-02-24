import React, { useEffect } from 'react'
import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import { Airport } from '../../data/airports';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
    color: "#000000"
  },
})

const AirportScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { airport }: { airport: Airport } = route.params;

  useEffect(() => {
    navigation.setOptions({ title: airport.name});
  }, [airport.name]);

  return <SafeAreaView style={styles.container}>
    <View style={{flex: -1}}>
      <Text>{airport.name}</Text>
      <Text>{airport.code}</Text>
      <View>
        <Text>Facilities:</Text>
      </View>
    </View>
  </SafeAreaView>
}

export default AirportScreen
