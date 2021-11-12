import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native'

export default function TransferCheckScreen ({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={{marginTop: 77, marginLeft: 83}}
        source={require('../image/transfer.png')}
      />
      <TextInput
        style={styles.inputphonenum}
        underlineColorAndroid='transparent'
        placeholder='Receiver Phone Number'
        placeholderTextColor='black'
        autoCapitalize='none'
        keyboardType='numeric'
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Transfer Confirmation')}
        style={styles.checkBtn}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color: '#FFFFFF'}}>
          CHECK NUMBER
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputphonenum: {
    marginTop: 86,
    margin: 77,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5,
  },
  checkBtn: {
    width: 240,
    marginLeft: 77,
    borderRadius: 4,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
    backgroundColor: '#4982C1',
  },
})
