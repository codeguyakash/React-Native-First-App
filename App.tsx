import React from 'react';
import {Text, View, Button} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={{fontSize: 50}}>Hello, world!</Text>
      <UserData />
      <CompanyData />
      <Button title="Press Here"></Button>
      <Text style={{fontSize: 50}}>Hello, world!</Text>
      <Button title="Press Here"></Button>
    </View>
  );
};

const UserData = () => {
  return (
    <View>
      <Text style={{fontSize: 40}}>Akash!</Text>
      <Text style={{fontSize: 40}}>Frontend Software Engineer</Text>
    </View>
  );
};
const CompanyData = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>Company Name : BrainyDx Technologies</Text>
      <Text style={{fontSize: 30}}>Since : 2010 </Text>
      <Text style={{fontSize: 30}}>Empolyees : 500</Text>
    </View>
  );
};

export default App;
