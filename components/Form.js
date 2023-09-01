import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import Exstyles from '../style';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [showPass, setShowPass] = useState(true);

  const isHide = () => {
    if (showPass) {
      setShowPass(false);
    } else {
      setShowPass(true);
    }
  };
  const resetData = () => {
    setDisplay(false);
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <View>
      <Text style={{fontSize: 28}}>Form</Text>
      <TextInput
        placeholder="Enter your Name"
        style={Exstyles.textInput}
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Enter your Email"
        style={Exstyles.textInput}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Enter your Password"
        style={Exstyles.textInput}
        value={password}
        secureTextEntry={showPass}
        fgdfgf
        onChangeText={text => setPassword(text)}
      />
      <View style={{marginTop: 10}}>
        <Button title="Display Data" onPress={() => setDisplay(true)} />
      </View>
      <View style={{marginTop: 10}}>
        <Button
          title={showPass ? 'Show 👁' : ' Hide 👁 '}
          color={showPass ? 'green' : 'blue'}
          onPress={isHide}
        />
      </View>
      <View style={{marginTop: 10}}>
        <Button title="Clear Data" color={'red'} onPress={resetData} />
      </View>
      {display ? (
        <View>
          <Text>Name : {name}</Text>
          <Text>Email : {email}</Text>
          <Text>Password : {password}</Text>
        </View>
      ) : null}
    </View>
  );
}

export default Form;
