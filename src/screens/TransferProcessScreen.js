import React from 'react'
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

export default function TransferProcessScreen ({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={{marginTop: 77, marginLeft: 83}}
        source={require('../image/transfer.png')}
      />
      <TextInput
        style={styles.inputnominaltrf}
        underlineColorAndroid='transparent'
        placeholder='Nominal Transfer'
        placeholderTextColor='black'
        autoCapitalize='none'
        keyboardType='numeric'
      />
      <Text
        style={{
          marginTop: 21,
          marginLeft: 164,
          color: '#000000',
          fontSize: 16,
          fontWeight: 'normal',
        }}>
        Receiver :
      </Text>
      <Text
        style={{
          marginLeft: 130,
          marginTop: 12,
          color: '#000000',
          fontSize: 16,
          fontWeight: 'normal',
        }}>
        Dandi Christiawan
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Transfer Success')}
        style={styles.transferBtn}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color: '#FFFFFF'}}>
          TRANSFER
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputnominaltrf: {
    marginTop: 86,
    margin: 76,
    height: 40,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 5,
  },
  transferBtn: {
    width: 240,
    margin: 76,
    borderRadius: 4,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
    backgroundColor: '#4982C1',
  },
})
