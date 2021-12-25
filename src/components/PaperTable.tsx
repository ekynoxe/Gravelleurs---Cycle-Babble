import React from 'react';
import { DataTable } from 'react-native-paper';
import { ScrollView, StyleSheet, Text, ViewStyle } from 'react-native';
import TableCell from './TableCell';
import { TableData } from '../types'

import { TableCell as TableCellStyle, TableHead, TableHeadText } from '../styles';

const styles = StyleSheet.create({
  cell: TableCellStyle as ViewStyle,
  head: TableHead as ViewStyle,
  headText: TableHeadText as ViewStyle,
});

const PaperTable = ({
  colDefs,
  data,
}: TableData) => (
  <ScrollView horizontal contentContainerStyle={{ width: '100%' }}>
    <DataTable>
      <ScrollView stickyHeaderIndices={[0]}>
        <DataTable.Header
          style={styles.head}
        >
          {colDefs.map((column) => (
            <DataTable.Title
              key={column.key}
              style={styles.cell}
            >
              <Text style={StyleSheet.flatten(styles.headText)}>{column.header}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>

        {data.map((row, rowIndex) => (
          <DataTable.Row
            // eslint-disable-next-line react/no-array-index-key
            key={rowIndex}
          >
            {colDefs.map((column, cellIndex) => (
              <TableCell
                // eslint-disable-next-line react/no-array-index-key
                key={`row${rowIndex}-${cellIndex}-${column.key}`}
                style={styles.cell}
              >
                <Text>{row[column.key]}</Text>
              </TableCell>
            ))}
          </DataTable.Row>
        ))}
      </ScrollView>
    </DataTable>
  </ScrollView>
);

export default PaperTable;
