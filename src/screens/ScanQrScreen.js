import React from 'react'
import {View, Text, Image, TouchableOpacity} from 'react-native'

export default function ScanQrScreen ({navigation}) {
  return (
    <View>
    <TouchableOpacity onPress={() => navigation.navigate('Payment Confirmation')}>
      <View
        style={{
          paddingTop: 20,
          paddingBottom: 10,
          height: 320,
          width: 320,
          marginLeft: 37,
          marginTop: 105,
          backgroundColor: '#C4C4C4',
        }}>
        <Image style={{marginLeft: 150, marginTop: 125}} source={require('../image/camera_alt_24px.png')} />
      </View>
    </TouchableOpacity>
    </View>
  )
}
