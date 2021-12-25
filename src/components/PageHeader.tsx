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
  animatingWidthValues?: number[];
  handleOnPressLeftNode?: (event: GestureResponderEvent) => void;
  handleOnPressRightNode?: (event: GestureResponderEvent) => void;
  headerText?: string;
  leftContainerStyle?: ViewProps['style'] | null;
  leftNode?: JSX.Element;
  rightContainerStyle?: ViewProps['style'] | null;
  rightNode?: JSX.Element;
};

const styles = StyleSheet.create({
  headerItem: {
    flex: 1,
    paddingVertical: 20,
  },
  leftItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 56,
  },
  pageHeaderContainer: {
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    width: 50,
  },
});

const PageHeader: React.FC<PageHeaderProps> = ({
  handleOnPressLeftNode = null,
  handleOnPressRightNode = null,
  headerText = '',
  leftContainerStyle = null,
  leftNode = null,
  rightContainerStyle = null,
  rightNode = null,
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
