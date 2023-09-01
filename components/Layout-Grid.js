import {View, Text} from 'react-native';
import React from 'react';
// import Exstyles from './../style';

const LayoutGrid = () => {
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
    
  ];
  return (
    <View>
      <Text style={Exstyles.text}>Grid</Text>
      <View style={Exstyles.grid}>
        {users.map((item, index) => (
          <Text key={index} style={Exstyles.items}>
            {item.name}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default LayoutGrid;
