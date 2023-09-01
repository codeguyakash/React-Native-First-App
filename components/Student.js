import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class Student extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 40}}>Props: {this.props.name}</Text>
      </View>
    );
  }
}
