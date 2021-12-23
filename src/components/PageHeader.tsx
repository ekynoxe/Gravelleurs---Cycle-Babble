// https://medium.com/timeless/constructing-a-react-native-screen-page-header-f2e92a6a8922
import React from 'react';
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
  ViewProps,
} from 'react-native';

type PageHeaderProps = {
  leftNode?: JSX.Element;
  rightNode?: JSX.Element;
  headerText?: string;
  handleOnPressLeftNode?: (event: GestureResponderEvent) => void;
  handleOnPressRightNode?: (event: GestureResponderEvent) => void;
  rightContainerStyle?: ViewProps['style'] | null;
  leftContainerStyle?: ViewProps['style'] | null;
  animatingWidthValues?: number[];
};

const styles = StyleSheet.create({
  pageHeaderContainer: {
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }, // tailwind('flex flex-row items-center justify-between '),
  leftItem: {
    flex: 0,
    backgroundColor: 'red',
    paddingLeft: 20,
    paddingVertical: 20,
  }, // tailwind('flex-1 pl-4 py-4'),
  rightItem: {
    alignItems: 'flex-end',
    backgroundColor: 'red',
    flex: 0,
    paddingRight: 20,
    paddingVertical: 20,
  }, // tailwind('flex-1 pr-4 items-end py-4'),
  headerItem: {
    flex: 1,
    paddingVertical: 20,
  }, // tailwind('flex-1 py-4'),
});

const PageHeader: React.FC<PageHeaderProps> = ({
  leftNode = null,
  rightNode = null,
  headerText = '',
  handleOnPressLeftNode = null,
  handleOnPressRightNode = null,
  rightContainerStyle = null,
  leftContainerStyle = null,
}) => (
  <View>
    <View style={styles.pageHeaderContainer}>
      <Pressable onPress={handleOnPressLeftNode} style={leftContainerStyle || styles.leftItem}>
        {leftNode}
      </Pressable>
      <View style={styles.headerItem}>
        <Text style={{ textAlign: 'center' }}>
          {headerText}
        </Text>
      </View>
      <Pressable onPress={handleOnPressRightNode} style={rightContainerStyle || styles.rightItem}>
        {rightNode}
      </Pressable>
    </View>
  </View>
);
export default PageHeader;
