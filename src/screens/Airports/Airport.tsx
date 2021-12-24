import React, { useEffect } from 'react';
import {
  StyleSheet, SafeAreaView, Text, View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from '../../utils/i18n';
import airports from '../../data/airports';
import PageHeader from '../../components/PageHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    color: '#000000',
  },
});

const AirportScreen = ({ route, navigation }: { route: any; navigation: any }) => {
  const { t } = useTranslation();
  const { airportCode }: { airportCode: string } = route.params;

  const airport = airports.find((a) => a.code === airportCode);

  useEffect(() => {
    if (airport) {
      navigation.setOptions({ title: airport.name });
    }
  }, [airport]);

  return !airport ? null : (
    <SafeAreaView style={styles.container}>
      <PageHeader
        headerText={airport.name}
        handleOnPressLeftNode={() => navigation.navigate('Airports')}
        leftNode={<Ionicons name="ios-chevron-back-circle-outline" size={30} />}
      />
      <View style={{
        flex: -1,
        paddingHorizontal: 8,
        paddingVertical: 16,
      }}
      >
        <Text>{airport.name}</Text>
        <Text>{airport.code}</Text>
        <View>
          <Text>{t('airport.facilities')}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AirportScreen;
