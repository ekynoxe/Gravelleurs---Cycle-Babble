import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTranslation } from '../../utils/i18n';
import airports from '../../data/airports';
import Screen from '../../components/Screen';

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
    <Screen
      headerText={airport.name}
      handleOnPressLeftNode={() => navigation.navigate('Airports')}
      leftNode={<Ionicons name="ios-chevron-back-circle-outline" size={30} />}
    >
        <Text>{airport.name}</Text>
        <Text>{airport.code}</Text>
        <View>
          <Text>{t('airport.facilities')}</Text>
        </View>
    </Screen>
  );
};

export default AirportScreen;
