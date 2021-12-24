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
  },
  leftItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: 50,
  },
  rightItem: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    height: '100%',
    width: 50,
  },
  headerItem: {
    flex: 1,
    paddingVertical: 20,
  },
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
