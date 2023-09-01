import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import Exstyles from './../style';
import Student from './Student';

export default class ClassComp extends Component {
  fruit = () => {
    console.warn('Mango');
  };
  constructor() {
    super();
    this.state = {
      name: 'Akash',
    };
  }
  updateName(value) {
    this.setState({name: value});
  }

  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}>Class</Text>
        <Text style={{fontSize: 40}}>{this.state.name}</Text>
        <Button title="Press" onPress={this.fruit} />
        <TextInput
          placeholder="Enter your name here"
          style={Exstyles.textInput}
          onChangeText={text => this.updateName(text)}
        />
        <Student name={this.state.name} />
      </View>
    );
  }
}
