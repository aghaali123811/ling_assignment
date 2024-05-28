/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {Text, View, TextInput, FlatList, TouchableOpacity} from 'react-native';
import TableList from '../components/FlatlistComponent/tableList';
import styles from './styles';
import {useSelector} from 'react-redux';

export default function SearchScreen() {
  const json = useSelector(state => state.auth.jsonData);
  const [search, setSearch] = useState('');
  const [filterData, setFilterData] = useState([]);
  const [data, setData] = useState(json);

  useEffect(() => {
    var dataa = [];
    let temp = Object.keys(data).forEach((e, i) => {
      {
        data?.[e].name === '' &&
          console.warn('Name is missing Default Name `John` is used');
      }
      let updatedData = {
        ...data?.[e],
        name: data?.[e].name === '' ? 'John' : data?.[e].name,
        isSearchUser: 'No',
        id: e,
        rank: i + 1,
      };
      dataa.push(updatedData);
    });

    let sorted = dataa.sort(function (a, b) {
      return b.bananas - a.bananas;
    });
    setData(sorted);
  }, []);

  const handleSearch = e => {
    let temp = [];
    var count = 0;
    data.forEach(ele => {
      if (count <= 9) {
        if (ele.name.toLowerCase() === search.toLowerCase() && count <= 9) {
          temp.push({...ele, isSearchUser: 'Yes'});
          count = count + 1;
        } else {
          temp.push(ele);
          count = count + 1;
        }
      } else {
        if (ele.name.toLowerCase() === search.toLowerCase()) {
          console.log('pop');
          temp.push({...ele, isSearchUser: 'Yes'});
          count = count + 1;
        }
      }
    });
    setFilterData(temp);
    console.log(temp.length);
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.row}>
          <TextInput
            style={styles.input1}
            placeholder="Username"
            value={search}
            onChangeText={e => setSearch(e)}
          />
          <TouchableOpacity style={styles.btn} onPress={() => handleSearch()}>
            <Text style={styles.txt1}>Search Button</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.tableHeading}>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>Name</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>Rank</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>bananas</Text>
          </View>
          <View style={styles.title}>
            <Text style={styles.titleTxt}>isSearch</Text>
          </View>
        </View>

        <FlatList
          data={filterData.length === 0 ? data : filterData}
          style={styles.list}
          renderItem={({item, index}) => (
            <>
              <TableList item={item} index={index} />
            </>
          )}
          keyExtractor={(item, index) => index}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
}
