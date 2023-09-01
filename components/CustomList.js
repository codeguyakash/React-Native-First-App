import {View, Text} from 'react-native';
import React from 'react';

const CustomList = () => {
  const users = [
    {id: '1', name: 'AKASH-1'},
    {id: '2', name: 'RITIK-2'},
    {id: '3', name: 'SURAJ-3'},
    {id: '4', name: 'RAVI-4'},
  ];

  return (
    <View>
      <Text style={{fontSize: 30}}>Customs List with using Map</Text>
      {users.map((user, index) => (
        <Text key={index} style={Exstyles.text}>
          {user.name}
        </Text>
      ))}
    </View>
  );
};

export default CustomList;
