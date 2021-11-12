import React from 'react'
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native'

export default function TopupScreen ({navigation}) {
  return (
    <View style={{backgroundColor: '#F4F4F4'}}>
      <Image
        style={{marginTop: 80, marginLeft: 112}}
        source={require('../image/wallet.png')}
      />
      <TextInput
        style={styles.inputnominal}
        underlineColorAndroid='transparent'
        placeholder='Nominal Top Up'
        placeholderTextColor='black'
        autoCapitalize='none'
        keyboardType='numeric'
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Top up Success')}
        style={styles.submitBtn}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color: '#FFFFFF'}}>
          SUBMIT
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputnominal: {
    marginTop: 26,
    margin: 55,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
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
