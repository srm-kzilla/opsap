import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Picker,
  Dimensions,
  Button,
  Image,
  Alert,
} from 'react-native';
import Header from '../components/Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function CollabScreen() {
  const [gender, setGender] = useState('M');
  return (
    <View style={{alignItems: 'center', padding: 10}}>
      <Header title="Collaborate with us" />

      <Image
        style={{
          width: windowWidth / 1.1,
          height: 180,
          resizeMode: 'contain',
        }}
        source={require('../assets/SAP_Logo.png')}
      />

      <CustomTextInput type="default" label="Your Name" />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={StyleSheet.flatten([
            styles.border,
            styles.margin,
            {flex: 1, marginRight: 3},
          ])}>
          <Picker
            selectedValue={gender}
            style={StyleSheet.flatten([{height: 49, color: "#aaa"}])}
            onValueChange={(itemValue, itemIndex) => setGender(itemValue)}>
            <Picker.Item label="Male" value="M" />
            <Picker.Item label="Female" value="F" />
            <Picker.Item label="Other" value="O" />
          </Picker>
        </View>
        <View
          style={StyleSheet.flatten([{flex: 1, marginLeft: 3, height: 50}])}>
          <CustomTextInput type="numeric" label="Age" />
        </View>
      </View>
      <CustomTextInput type="default" label="College/University Name" />

      <TouchableOpacity
        style={{
          width: windowWidth / 3,
          // paddingTop: 10,
          // height: 50,
          marginTop: 15,
          padding: 6,

          // borderRadius: 100,
          borderWidth: 2,
          borderColor: 'red',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',

          flexDirection: 'column',
        }}
        onPress={() => Alert.alert('Thank you :)')}>
        <Text
          style={{
            color: 'red',
            fontSize: 16,
            fontFamily: 'NeueHaasDisplay-Roman',
          }}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const CustomTextInput = (props) => {
  return (
    <View style={(styles.inputCont, styles.margin, {width: '100%'})}>
      <TextInput
        keyboardType={props.type}
        style={(styles.inputField, styles.border)}
        placeholder={props.label}

        // onChangeText={(text) => setText(text)}
        // defaultValue={props.label}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputCont: {
    display: 'flex',
  },
  border: {
    // elevation: 2,
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: '#0007',
  },
  margin: {
    marginVertical: 5,
    // marginHorizontal: 5,
  },
  inputField: {height: 40, fontSize: 12},
});
