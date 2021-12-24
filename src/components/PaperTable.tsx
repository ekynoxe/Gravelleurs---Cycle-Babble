import React from 'react';
import { DataTable } from 'react-native-paper';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TableCell from './TableCell';

const styles = StyleSheet.create({
  cell: { width: '30%', marginRight: 30 },
  head: { backgroundColor: '#f1f8ff' },
  headText: { color: '#000', fontSize: 20, fontWeight: '700' },
});

const PaperTable = ({ data }: { data: any; }) => (
  <ScrollView horizontal contentContainerStyle={{ width: '100%' }}>
    <DataTable>
      <ScrollView stickyHeaderIndices={[0]}>
        <DataTable.Header
          style={styles.head}
        >
          {data.head.map((column: string) => (
            <DataTable.Title
              key={column}
              style={styles.cell}
            >
              <Text style={StyleSheet.flatten(styles.headText)}>{column}</Text>
            </DataTable.Title>
          ))}
        </DataTable.Header>

        {data.rows.map((row: any, rowIndex: number) => (
          <DataTable.Row
            // eslint-disable-next-line react/no-array-index-key
            key={rowIndex}
          >
            {row.map((_: unknown, cellIndex: number) => (
              <TableCell
                // eslint-disable-next-line react/no-array-index-key
                key={`row${rowIndex}-${cellIndex}-${row[cellIndex]}`}
                style={styles.cell}
              >
                <Text>{row[cellIndex]}</Text>
              </TableCell>
            ))}
          </DataTable.Row>
        ))}
      </ScrollView>
    </DataTable>
  </ScrollView>
);

export default PaperTable;
