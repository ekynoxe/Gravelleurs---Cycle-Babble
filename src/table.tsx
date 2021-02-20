import React, { FC, useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';

interface Props {
  tableHead?: string[];
  rows?: any[];
}

const widthArr = [150, 150];

export const TableComponent = ({ tableHead = [], rows= []}: Props): JSX.Element=> {
  return (
      <ScrollView horizontal={true}>
        <View>
          <Table borderStyle={{borderColor: '#C1C0B9'}}>
            <Row data={tableHead} widthArr={widthArr} style={styles.head} textStyle={styles.text}/>
          </Table>
          <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{borderColor: '#C1C0B9'}}>
              {
                rows.map((dataRow, index) => (
                  <Row
                    key={index}
                    data={dataRow}
                    widthArr={widthArr}
                    style={[styles.row, index%2 && {backgroundColor: '#ffffff'}]}
                    textStyle={styles.text}
                  />
                ))
              }
            </Table>
          </ScrollView>
        </View>
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    paddingTop: 30, 
    backgroundColor: '#ffffff' 
  },
  head: {
    fontWeight: 'bold',
    height: 30,
    backgroundColor: '#bbbbbb',
    padding: 8
  },
  text: { 
    fontWeight: '300',
    textAlign: 'left',
  },
  dataWrapper: { 
    marginTop: -1 
  },
  row: { 
    flex: 1,
    padding: 8, 
    backgroundColor: '#F7F8FA' ,
    width: '100%'
  }
});