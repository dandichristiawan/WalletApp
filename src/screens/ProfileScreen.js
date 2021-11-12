import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function ProfileScreen ({navigation}) {
  return (
    <View style={{flex: 1}}>
      <View style={{height: 240, backgroundColor: '#005690'}}>
        <View style={styles.CircleShapeView}></View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'normal',
            color: 'white',
            marginLeft: 120,
            marginTop: 15,
          }}>
          Dandi Christiawan
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'normal',
            color: 'white',
            marginLeft: 130,
            marginTop: 9,
          }}>
          085156540916
        </Text>
      </View>
      <TouchableOpacity style={styles.buttonBtn}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color: '#FFFFFF'}}>
          CHANGE PROFILE
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBtn}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color: '#FFFFFF'}}>
          CHANGE PASSWORD
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonBtn} onPress={() => navigation.navigate('Login')}>
        <Text style={{fontSize: 16, fontWeight: 'normal', color: '#FFFFFF'}}>
          LOGOUT
        </Text>
      </TouchableOpacity>
      {/* navbarBottom section */}
      <View style={{flex: 1, backgroundColor: '#F0F0F0'}}></View>
      <View
        style={{height: 56, backgroundColor: 'white', flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 26, height: 26, backgroundColor: 'white'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image source={require('../image/home_24px.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 26, height: 26, backgroundColor: 'white'}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Transaction History')}>
              <Image source={require('../image/swap_vert_24px.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{width: 26, height: 26, backgroundColor: 'white'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image source={require('../image/perm_identity_24px.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  CircleShapeView: {
    width: 120,
    height: 120,
    marginTop: 25,
    marginLeft: 135,
    borderRadius: 200 / 2,
    backgroundColor: 'white',
  },
  buttonBtn: {
    width: 280,
    margin: 55,
    borderRadius: 4,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: '#4982C1',
  },
})
