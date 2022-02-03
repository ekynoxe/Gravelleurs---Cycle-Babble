import React, { PropsWithChildren } from 'react';
import {
  StyleSheet, SafeAreaView, Text, View, ViewStyle,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PageHeader from './PageHeader';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    color: '#000000',
  },
  screenContent: {
    display: 'flex',
    flex: -1,
    overflowY: 'auto',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
})

type ScreenProps = {
  handleOnPressLeftNode?: () => void
  headerText: string,
  leftNode?: React.ReactElement
}

const Screen = ({
  children,
  handleOnPressLeftNode,
  headerText,
  leftNode,
}: PropsWithChildren<ScreenProps>) => {

  return (
    <SafeAreaView style={styles.screen}>
      <PageHeader
        headerText={headerText}
        handleOnPressLeftNode={handleOnPressLeftNode}
        leftNode={leftNode}
        // TODO: add other page header props
      />
      <View style={styles.screenContent}>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Screen;
