import {
  Text,
  View,
  Button,
  Image,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import CompanyData from './components/CompanyData';
import UserData from './components/UserData';
import Form from './components/Form';
import {useState} from 'react';
import Exstyles from './style';
import Flat_List from './components/Flat_List';
import CustomList from './components/CustomList';
import Grid from './components/Layout-Grid';
import SelList from './components/Sel-List';
import ClassComp from './components/ClassComp';
const App = () => {
  const [data, setData] = useState(0);
  const [name, setName] = useState('Akash');
  let userDetails = {
    name: 'Akash',
    age: 23,
    role: 'Software Engineer',
  };
  let companyDetails = {
    name: 'BrainyDX Technologies',
    emp: 5000,
    type: 'Service Based Company',
  };
  const onPress = () => {
    setData(data + 1);
    console.warn(`Button Pressed`);
  };
  return (
    <ScrollView>
      <View style={Exstyles.viewBox}>
        {/* <Flat_List /> */}
        {/* <CustomList /> */}
        <ClassComp/>
        <Grid />
        <SelList />

        <View style={Exstyles.grid}>
          <Image
            source={{
              uri: 'https://codeguyakash.github.io/server/image.png',
            }}
            style={Exstyles.profileImage}
          />
          <Image
            source={{
              uri: 'https://codeguyakash.github.io/server/image.png',
            }}
            style={Exstyles.profileImage}
          />
          <Image
            source={{
              uri: 'https://codeguyakash.github.io/server/image.png',
            }}
            style={Exstyles.profileImage}
          />
        </View>
        <Text style={{fontSize: 42}}>Hello👋</Text>
        <UserData item={userDetails} />
        <Button title="Learn More" onPress={onPress} />
        <CompanyData item={companyDetails} />
        <Button
          title={`Count ${data}`}
          color={'green'}
          onPress={() => onPress()}
        />
        <Button title="press" onPress={() => Alert.alert('Hello')} />
        <Text style={{fontSize: 42}}>{name}</Text>
        <TextInput
          placeholder="Enter Your Name"
          value={name}
          style={Exstyles.textInput}
          onChangeText={text => setName(text)}
        />
        <View style={{marginTop: 10}}>
          <Button title="Clear Input" color="red" onPress={() => setName('')} />
        </View>
        <Form />
      </View>
    </ScrollView>
  );
};
export default App;
