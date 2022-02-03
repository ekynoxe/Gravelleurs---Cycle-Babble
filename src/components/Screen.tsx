import React, { PropsWithChildren } from 'react';
import {
  StyleSheet, SafeAreaView, ScrollView, View,
} from 'react-native';
import PageHeader from './PageHeader';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    color: '#000000',
    overflow: 'hidden',
  },
  screenContent: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
})

type ScreenProps = {
  handleOnPressLeftNode?: () => void
  headerText: string,
  leftNode?: React.ReactElement
  noScroll?: boolean
}

const Screen = ({
  children,
  handleOnPressLeftNode,
  headerText,
  leftNode,
  noScroll,
}: PropsWithChildren<ScreenProps>) => {
  const Component = noScroll ? View : ScrollView

  return (
    <SafeAreaView style={styles.screen}>
      <PageHeader
        headerText={headerText}
        handleOnPressLeftNode={handleOnPressLeftNode}
        leftNode={leftNode}
        // TODO: add other page header props
      />
      <Component style={styles.screenContent}>
        {children}
      </Component>
    </SafeAreaView>
  );
};

export default Screen;
