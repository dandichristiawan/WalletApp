import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

export default function PaySuccessScreen ({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={{marginTop: 77, marginLeft: 109}}
        source={require('../image/orang.png')}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'normal',
          color: '#000000',
          marginTop: 11,
          marginLeft: 95,
        }}>
        Payment Complete !
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'normal',
          color: '#000000',
          marginTop: 11,
          marginLeft: 134,
        }}>
        Rp. 500.000
      </Text>
      <View
        style={{
          flexDirection: 'column',
          paddingTop: 20,
          paddingBottom: 10,
          height: 105,
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
            marginLeft: 68,
            marginTop: 10,
          }}>
          12 November 2021
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'normal',
            color: '#FFFFFF',
            marginLeft: 58,
            marginTop: 17,
          }}>
          Merchant : Indomaret
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'normal',
            color: '#FFFFFF',
            marginLeft: 50,
            marginTop: 6,
          }}>
          Jl. Dago 22, Kota Bandung
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}
        style={styles.submitBtn}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color: '#FFFFFF'}}>
          FINISH
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  submitBtn: {
    width: 280,
    margin: 59,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25,
    marginBottom: 10,
    backgroundColor: '#4982C1',
  },
})
