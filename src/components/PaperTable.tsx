import React from "react";
import { DataTable } from "react-native-paper";
import { ScrollView, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  cell: { minWidth: 200 },
  head: { backgroundColor: "#f1f8ff" },
  headText: { fontSize: 20, fontWeight: '700' },
});

export const PaperTable = ({data}: { data: any;}) => {
  return (
    <DataTable>
      <ScrollView horizontal={true}>
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
                <DataTable.Cell
                  key={cellIndex}
                  accessibilityTraits={undefined}
                  accessibilityComponentType={undefined}
                  style={styles.cell}
                >
                  <Text>{row[cellIndex]}</Text>
                </DataTable.Cell>
              ))}
            </DataTable.Row>
          ))}
        </ScrollView>
      </ScrollView>
    </DataTable>
  );
};