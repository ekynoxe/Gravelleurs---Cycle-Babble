/**
 * A component adapted from react-native-paper DataTable.Cell
 * I don't care about MD guidelines, so I've removed `numberOfLines={1}` from the <Text> component.
 */
import * as React from 'react';
import { StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { Text, TouchableRipple } from 'react-native-paper';
import { $RemoveChildren } from '../types';

type Props = $RemoveChildren<typeof TouchableRipple> & {
  /**
   * Content of the `DataTableCell`.
   */
  children: React.ReactNode;
  /**
   * Align the text to the right. Generally monetary or number fields are aligned to right.
   */
  numeric?: boolean;
  /**
   * Function to execute on press.
   */
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    justifyContent: 'flex-end',
  },
});

const TableCell = ({
  children, style, numeric, ...rest
}: Props) => (
  <TouchableRipple
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}
    accessibilityTraits={undefined}
    accessibilityComponentType={undefined}
    style={[styles.container, numeric && styles.right, style]}
  >
    <Text accessibilityComponentType={undefined} accessibilityTraits={undefined}>{children}</Text>
  </TouchableRipple>
);

TableCell.displayName = 'TableCell';

export default TableCell;
