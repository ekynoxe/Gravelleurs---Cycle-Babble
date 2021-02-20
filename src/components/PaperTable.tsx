import React from "react";
import { DataTable } from "react-native-paper";
import { ScrollView, StyleSheet, Text } from "react-native";
import TableCell from './TableCell'

const styles = StyleSheet.create({
  cell: { width: 160, marginRight: 30 },
  head: { backgroundColor: "#f1f8ff" },
  headText: { fontSize: 20, fontWeight: '700' },
});

export const PaperTable = ({data}: { data: any;}) => {
  return (
    <ScrollView horizontal={true}>
      <DataTable>
        <ScrollView stickyHeaderIndices={[0]}>
          <DataTable.Header 
            accessibilityTraits={undefined}
            accessibilityComponentType={undefined}
            style={styles.head}
          >
            {data.head.map((column: any, index: number) => (
              <DataTable.Title
                key={index}
                accessibilityTraits={undefined}
                accessibilityComponentType={undefined}
                style={styles.cell}
              >
                <Text style={StyleSheet.flatten(styles.headText)}>{column}</Text>
              </DataTable.Title>
            ))}
          </DataTable.Header>
          
          {data.rows.map((row: any, index: number) => (
            <DataTable.Row
              key={index}
              accessibilityTraits={undefined}
              accessibilityComponentType={undefined}
            >
              {row.map((_: any, cellIndex: number) => (
                <TableCell
                  key={cellIndex}
                  accessibilityTraits={undefined}
                  accessibilityComponentType={undefined}
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
};