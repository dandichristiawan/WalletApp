import React from 'react'
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native'

export default function TopupSuccessScreen ({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Image
        style={{marginTop: 77, marginLeft: 123}}
        source={require('../image/wallet.png')}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'normal',
          color: '#000000',
          marginTop: 38,
          marginLeft: 105,
        }}>
        Top Up Complete
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
          height: 90,
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
            marginLeft: 110,
            marginTop: 30,
          }}>
          VA BCA
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonBtn} onPress={() => navigation.navigate('Home')}>
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
