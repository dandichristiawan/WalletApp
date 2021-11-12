import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'

export default function LoginScreen ({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.CircleShapeView}>
        <Image
          style={{marginLeft: 28, marginTop: 35}}
          source={require('../image/pngaaa2.png')}
        />
      </View>
      <Text
        style={{
          justifyContent: 'center',
          marginLeft: 150,
          marginTop: 20,
          fontSize: 24,
          color: '#4982C1',
          fontWeight: 'bold',
        }}>
        E-Wallet
      </Text>
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
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.loginBtn}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#FFFFFF'}}>
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
      onPress={() => navigation.navigate('Account Registration')}>
      <Text style={{marginLeft: 160, marginTop: 1, fontSize: 14, color: '#4E4E4E'}}>Registration</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  CircleShapeView: {
    width: 150,
    height: 150,
    marginTop: 30,
    marginLeft: 120,
    borderRadius: 200 / 2,
    backgroundColor: '#005690',
  },
  inputemail: {
    marginTop: 40,
    margin: 55,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  inputpassword: {
    marginTop: 10,
    margin: 55,
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
  },
  loginBtn: {
    width: 280,
    margin: 55,
    borderRadius: 4,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
    backgroundColor: '#4982C1',
  },
})
