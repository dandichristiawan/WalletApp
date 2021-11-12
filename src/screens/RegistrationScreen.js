import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

export default function RegistrationScreen ({navigation}) {
  return (
    <View styles={styles.container}>
      <TextInput
        style={styles.inputemail}
        underlineColorAndroid='transparent'
        placeholder='Email'
        placeholderTextColor='#ACACAC'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.inputpassword}
        secureTextEntry={true}
        underlineColorAndroid='transparent'
        placeholder='Password'
        placeholderTextColor='#ACACAC'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.inputname}
        underlineColorAndroid='transparent'
        placeholder='Name'
        placeholderTextColor='#ACACAC'
        autoCapitalize='none'
      />
      <TextInput
        style={styles.inputphonenum}
        underlineColorAndroid='transparent'
        placeholder='Phone Number'
        placeholderTextColor='#ACACAC'
        autoCapitalize='none'
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.submitBtn}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>
          Submit
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inputemail: {
    marginTop: 70,
    margin: 55,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  inputpassword: {
    marginTop: 20,
    margin: 55,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  inputname: {
    marginTop: 20,
    margin: 55,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  inputphonenum: {
    marginTop: 20,
    margin: 55,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  submitBtn: {
    width: 280,
    margin: 55,
    borderRadius: 4,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
    backgroundColor: '#4982C1',
  },
})
