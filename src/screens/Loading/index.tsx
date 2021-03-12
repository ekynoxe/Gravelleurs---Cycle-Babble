import React from 'react';
import {
  StyleSheet, SafeAreaView, Text, View,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    color: '#000000',
  },
});

const LoadingScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={{ flex: -1 }}>
      <Text>Loading...</Text>
    </View>
  </SafeAreaView>
);

export default LoadingScreen;
