import React, { useMemo, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TableData } from '../types'

const styles = StyleSheet.create({
  columnHeader: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  columnHeaderTxt: {
    color: '#000',
    fontSize: 20,
    fontWeight: '700',
  },
  columnRowTxt: {
    alignItems: 'center',
    display: 'flex',
    flex: 1,
    flexShrink: 1,
    paddingBottom: 5,
    paddingRight: 30,
    paddingTop: 5,
    width: 180,
  },
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    width: '100%',
  },
  tableHeader: {
    alignItems: 'center',
    backgroundColor: '#f1f8ff',
    borderBottomColor: '#e4e4e5',
    borderBottomWidth: 2,
    flexDirection: 'row',
    height: 50,
    justifyContent: 'space-evenly',
  },
  tableRow: {
    borderBottomColor: '#e4e4e5',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    minHeight: 48,
  }
});

const orderBy = (data: any[], field: string, direction: 'asc' | 'desc') => {
  return data.sort((a, b) => {
    if (a[field] === b[field]) return 0

    return (a[field] > b[field] ? 1 : -1) * (direction === 'asc' ? 1 : -1)
  })
}

const PaperTable = ({
  colDefs,
  data,
  search,
}: TableData) => {
  const [ direction, setDirection ] = useState<'asc' | 'desc'>('asc')
  const [ selectedColumn, setSelectedColumn ] = useState<string>()
  // const [ words, setWords ] = useState(data)

  const sortTable = (column: string) => {
    // const newDirection = direction === "desc" ? "asc" : "desc" 
    // const sortedData = orderBy(words, column, newDirection)
    // setSelectedColumn(column)
    // setDirection(newDirection)
    // setWords(sortedData)
  }

  const filteredData = useMemo(() => {
    const regexp = new RegExp(search, 'gi');
    return data.filter((words) => Object.values(words).find((word) => word.match(regexp)));
  }, [search]);

  const tableHeader = () => (
    <View style={styles.tableHeader}>
      {
        (colDefs || []).map((column, index) => {
          {
            return (
              <TouchableOpacity 
                key={index}
                style={styles.columnHeader} 
                onPress={()=> sortTable(column.key)}>
                <Text style={styles.columnHeaderTxt}>{column.header + " "} 
                  {/* { selectedColumn === column.key && <MaterialCommunityIcons 
                      name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"} 
                    />
                  } */}
                </Text>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  )

  return (
    <ScrollView horizontal style={styles.container}>
      <FlatList
        data={filteredData}
        style={{minWidth: '100%'}}
        keyExtractor={(_: unknown, index: number) => `${index}`}
        ListHeaderComponent={tableHeader}
        stickyHeaderIndices={[0]}
        renderItem={({item: row, index: rowIndex}: {item: any, index: number})=> {
          return (
            <View style={styles.tableRow}>
              {colDefs.map((column, cellIndex) => (
                <Text style={styles.columnRowTxt} key={`row${rowIndex}-${cellIndex}-${column.key}`}>{row[column.key]}</Text>
              ))}
            </View>
          )
        }}
      />
    </ScrollView>
  )
}
export default PaperTable