import {Text, View, Button, Image} from 'react-native';
import CompanyData from './components/CompanyData';
import UserData from './components/UserData';
import {useState} from 'react';
import Exstyles from './style';

const App = () => {
  const [data, setData] = useState(0);
  let name = 'Father';

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
    <View style={Exstyles.viewBox}>
      <Image
        source={{
          uri: 'https://codeguyakash.github.io/server/image.png',
        }}
        style={Exstyles.profileImage}
      />
      <Text style={{fontSize: 42, textAlign: 'center'}}>Hello👋</Text>

      <UserData item={userDetails} />
      {/* <Button title="Learn More" onPress={onPress} /> */}
      <CompanyData item={companyDetails} />
      <Button
        title={`Count ${data}`}
        color={'green'}
        onPress={() => onPress()}
      />
    </View>
  );
};

export default App;
