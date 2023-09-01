import {View, Text, SectionList} from 'react-native';
import React from 'react';

const SelList = () => {
  const users = [
    {
      id: 1,
      name: 'Akash',
      username: 'codeguyakash',
      data: ['PHP', 'JavaScript', 'Python', 'Java'],
    },
    {
      id: 2,
      name: 'Suraj',
      username: 'artguyrock',
      data: ['Ruby', 'TypeScript', 'C++', 'Java'],
    },
    {
      id: 3,
      name: 'Ritik',
      username: 'loveguy',
      data: ['NodeJs', 'MongoDB', 'React-Native', 'Angular'],
    },
  ];
  return (
    <View>
      <Text style={Exstyles.text}>SelectionList</Text>
      <SectionList
        sections={users}
        renderItem={({item}) => <Text style={Exstyles.text}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => <Text style={Exstyles.textBox}>{name}</Text>}
      />
    </View>
  );
};

export default SelList;
