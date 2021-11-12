import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'

export default function QRPayConfirmScreen ({navigation}) {
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
          marginLeft: 134,
        }}>
        Rp. 500.000
      </Text>
      <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          width: 280,
          marginLeft: 60,
        }}
      />
      <View
        style={{
          flexDirection: 'column',
          paddingTop: 20,
          paddingBottom: 10,
          height: 110,
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
            marginLeft: 90,
            marginTop: 10,
          }}>
          Payment to :
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'normal',
            color: '#FFFFFF',
            marginLeft: 85,
            marginTop: 11,
          }}>
          Indomaret
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 'normal',
            color: '#FFFFFF',
            marginLeft: 42,
            marginTop: 2,
          }}>
          Jl. Dago 22, Kota Bandung
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Payment Complete')}
        style={styles.submitBtn}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color: '#FFFFFF'}}>
          SUBMIT
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
