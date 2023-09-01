import {View, Text, FlatList, ScrollView} from 'react-native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Flat_List = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get('https://jsonplaceholder.typicode.com/comments')
  //     .then(users => setUsers(users.data));
  // }, []);
  const users = [
    {
      id: 1,
      name: 'Akash',
      username: 'codeguyakash',
    },
    {
      id: 2,
      name: 'Suraj',
      username: 'artguyrock',
    },
    {
      id: 3,
      name: 'Ritik',
      username: 'loveguy',
    },
    {
      id: 4,
      name: 'Ravi',
      username: 'loveguy',
    },
    {
      id: 5,
      name: 'Deepak',
      username: 'loveguy',
    },
  ];
  return (
    <ScrollView>
      <View>
        <Text style={{fontSize: 40}}>FlatList</Text>
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <Text key={index} style={Exstyles.list}>
              Id : {item.id} - Name : {item.name}
            </Text>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default Flat_List;
