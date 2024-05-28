import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Colors from '../../common/Colors';

export default function TableList(props) {
  const {item,index} = props;
  return (
    <>
      <View
        style={styles.container}>
        <View
          style={{
            width: '25%',
            backgroundColor: item.color === true ? Colors.lightGreen : Colors.white,
            borderColor: Colors.green,
            borderWidth: 1,
          }}>
          <Text style={[styles.txt,{color:item.isSearchUser === 'Yes' ?'red' :Colors.black}]}>{item.name}</Text>
        </View>
        <View
          style={{
            width: '25%',
            backgroundColor: item.color === true ? Colors.lightGreen : Colors.white,
            borderColor: Colors.green,
            borderWidth: 1,
          }}>
          <Text style={styles.txt}>{item.rank}</Text>
        </View>
        <View
          style={{
            width: '25%',
            backgroundColor: item.color === true ? Colors.lightGreen : Colors.white,
            borderColor: Colors.green,
            borderWidth: 1,
          }}>
          <Text style={styles.txt}>{item.bananas}</Text>
        </View>
        <View
          style={{
            width: '25%',
            backgroundColor: item.color === true ? Colors.lightGreen : Colors.white,
            borderColor: Colors.green,
            borderWidth: 1,
          }}>
          <Text style={styles.txt}>{item.isSearchUser}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
    container:{
        width: '80%',
        minHeight: 30,
        alignSelf: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
      },
  txt: {alignSelf: 'center', marginTop: 4, fontWeight: 'bold', color: Colors.black},
});
