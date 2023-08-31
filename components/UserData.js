import {View, Text, StyleSheet} from 'react-native';
import Exstyles from '../style';
const UserData = props => {
  return (
    <View>
      <Text style={styles.textBox}>I'm {props.item.name}!</Text>
      {/* <Text style={styles.textBox}>I am a {props.item.role}!</Text> */}
      <Text style={[styles.textBox, Exstyles.textBox, {margin: 10}]}>
        I am a {props.item.role}!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textBox: {
    color: '#ffd600',
    fontSize: 40,
    textAlign: 'center',
  },
});

export default UserData;
