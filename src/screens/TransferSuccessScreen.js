import React from 'react'
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native'

export default function TransferSuccessScreen ({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={{marginTop: 77, marginLeft: 83}}
        source={require('../image/transfer.png')}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'normal',
          color: '#000000',
          marginTop: 38,
          marginLeft: 105,
        }}>
        Transfer Success!
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'normal',
          color: '#000000',
          marginTop: 15,
          marginLeft: 124.8,
        }}>
        Rp. 1.000.000
      </Text>
      <View
        style={{
          flexDirection: 'column',
          paddingTop: 20,
          paddingBottom: 10,
          height: 120,
          width: 280,
          marginLeft: 60,
          marginTop: 23,
          backgroundColor: '#4982C1',
        }}>
        <Text
          style={{
            position: 'absolute',
            fontSize: 18,
            fontWeight: 'normal',
            color: '#FFFFFF',
            marginLeft: 70,
            marginTop: 14,
          }}>
          12 November 2021
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'normal',
            color: '#FFFFFF',
            marginLeft: 28,
            marginTop: 30,
          }}>
          Receiver : Dandi Christiawan
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'normal',
            color: '#FFFFFF',
            marginLeft: 94,
            marginTop: 10,
          }}>
          0851564xxx
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonBtn}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color: '#FFFFFF'}}>
          FINISH
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonBtn: {
    width: 280,
    margin: 55,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginLeft: 60,
    marginBottom: 10,
    backgroundColor: '#4982C1',
  },
})
