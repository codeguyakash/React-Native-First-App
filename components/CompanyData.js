import {Text, View} from 'react-native';

const CompanyData = props => {
  return (
    <View>
      <Text style={{fontSize: 25}}>Company Name : {props.item.name}</Text>
      <Text style={{fontSize: 25}}>Empolyees : {props.item.emp}</Text>
    </View>
  );
};

export default CompanyData;
