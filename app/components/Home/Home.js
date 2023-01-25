import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import styles from './styles';

export default function Home({navigation}) {
  const [userData, setUserData] = useState({
    userName: '',
    password: '',
  });

  const {
    parent,
    heading,
    textAlignCenter,
    input,
    bgGrey,
    bgYellow,
    mb12,
    mt12,
  } = styles;

  function handleLoginButton() {
    if (userData.userName === 'admin' && userData.password === 'admin') {
      navigation.navigate('Dashboard');
    } else {
      // something is wrong
      Alert.alert('Error', 'Incorrect Username or Password', [{text: 'Okay'}]);
    }
  }

  return (
    <View style={parent}>
      <Text style={[heading, textAlignCenter, mb12]}>Login to the App</Text>
      <View style={[bgYellow, mb12]}>
        <TextInput
          style={input}
          placeholder="Username"
          onChangeText={text => setUserData({...userData, userName: text})}
        />
      </View>
      <View style={bgYellow}>
        <TextInput
          style={input}
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={text => setUserData({...userData, password: text})}
        />
      </View>
      <View style={[bgGrey, mt12]}>
        <Button
          color="black"
          title={'Login'}
          onPress={() => handleLoginButton()}
        />
      </View>
    </View>
  );
}
