import React from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

export default function HomeScreen ({navigation}) {
  return (
    <View style={{flex: 1}}>
      {/* balance section */}
      <View style={{backgroundColor: 'white', height: 120, marginBottom: 20}}>
        <Text
          style={{
            marginTop: 10,
            marginLeft: 15,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#484848',
          }}>
          Your Balance :
        </Text>
        <Text
          style={{
            marginTop: 8,
            marginLeft: 45,
            marginBottom: 7,
            fontSize: 36,
            fontWeight: 'bold',
            color: '#575757',
          }}>
          Rp. 1.234.567.000
        </Text>
      </View>
      {/* top-up section */}
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 10,
          borderRadius: 4,
          height: 95,
          width: 320,
          marginLeft: 37,
          backgroundColor: '#4982C1',
        }}>
        <View style={styles.rectangle1}>
          <TouchableOpacity onPress={() => navigation.navigate('Top up')}>
            <Image
              style={{
                height: 14,
                width: 14,
                marginRight: 17,
                marginLeft: 13,
                marginTop: 13,
                marginBottom: 13,
              }}
              source={require('../image/add_24px.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 4,
              marginBottom: 1,
              fontSize: 10,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Top up
          </Text>
        </View>
        <View style={styles.rectangle2}>
          <TouchableOpacity onPress={() => navigation.navigate('QR Payment')}>
            <Image
              style={{
                height: 14,
                width: 14,
                marginRight: 17,
                marginLeft: 13,
                marginTop: 13,
                marginBottom: 13,
              }}
              source={require('../image/center_focus_weak_24px.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              marginLeft: 3.3,
              marginBottom: 1,
              fontSize: 10,
              fontWeight: 'bold',
              color: 'white',
            }}>
            QR Pay
          </Text>
        </View>
        <View style={styles.rectangle3}>
          <TouchableOpacity onPress={() => navigation.navigate('Transfer to')}>
            <Image
              style={{
                height: 14,
                width: 14,
                marginRight: 17,
                marginLeft: 12,
                marginTop: 13,
                marginBottom: 13,
              }}
              source={require('../image/trending_flat_24px.png')}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 5,
              marginRight: 0.5,
              marginBottom: 1,
              fontSize: 10,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Transfer
          </Text>
        </View>
      </View>
      {/* latest transaction section */}
      <Text
        style={{marginTop: 37, marginLeft: 37, color: '#000000', fontSize: 14}}>
        Latest Transaction
      </Text>
      <View
        elevation={5}
        style={{
          flexDirection: 'row',
          shadowColor: '#000000',
          shadowRadius: 5,
          shadowOpacity: 3.0,
          marginTop: 9,
          height: 70,
          width: 320,
          marginLeft: 37,
          backgroundColor: '#FFFFFF',
        }}>
        <Image
          style={{height: 18, width: 18, marginTop: 24, marginLeft: 11}}
          source={require('../image/compare_arrows_24px.png')}
        />
        <Text style={{marginLeft: 11, marginTop: 16, color: '#000000'}}>
          Rp. 80.000
        </Text>
        <Text style={{marginTop: 16, marginLeft: 123, color: '#000000'}}>
          11/11/2021
        </Text>
        <Text
          style={{
            position: 'absolute',
            marginTop: 39,
            marginLeft: 40,
            color: '#000000',
          }}>
          Transfer to 085156540916
        </Text>
      </View>
      <View
        elevation={5}
        style={{
          flexDirection: 'row',
          shadowColor: '#000000',
          shadowRadius: 5,
          shadowOpacity: 3.0,
          marginTop: 16,
          height: 70,
          width: 320,
          marginLeft: 37,
          backgroundColor: '#FFFFFF',
        }}>
        <Image
          style={{height: 18, width: 18, marginTop: 29, marginLeft: 11}}
          source={require('../image/compare_arrows_24px.png')}
        />
        <Text style={{marginLeft: 11, marginTop: 16, color: '#000000'}}>
          Rp. 100.000
        </Text>
        <Text style={{marginTop: 16, marginLeft: 123, color: '#000000'}}>
          12/11/2021
        </Text>
        <Text
          style={{
            position: 'absolute',
            marginTop: 39,
            marginLeft: 40,
            color: '#000000',
          }}>
          Transfer to 085156540916
        </Text>
      </View>
      <View
        elevation={5}
        style={{
          flexDirection: 'row',
          shadowColor: '#000000',
          shadowRadius: 5,
          shadowOpacity: 3.0,
          marginTop: 16,
          height: 70,
          width: 320,
          marginLeft: 37,
          backgroundColor: '#FFFFFF',
        }}>
        <Image
          style={{height: 18, width: 18, marginTop: 29, marginLeft: 11}}
          source={require('../image/compare_arrows_24px.png')}
        />
        <Text style={{marginLeft: 11, marginTop: 16, color: '#000000'}}>
          Rp. 200.000
        </Text>
        <Text style={{marginTop: 16, marginLeft: 123, color: '#000000'}}>
          13/11/2021
        </Text>
        <Text
          style={{
            position: 'absolute',
            marginTop: 39,
            marginLeft: 40,
            color: '#000000',
          }}>
          Transfer to 085156540916
        </Text>
      </View>
       <View
        elevation={5}
        style={{
          flexDirection: 'row',
          shadowColor: '#000000',
          shadowRadius: 5,
          shadowOpacity: 3.0,
          marginTop: 16,
          height: 70,
          width: 320,
          marginLeft: 37,
          backgroundColor: '#FFFFFF',
        }}>
        <Image
          style={{height: 18, width: 18, marginTop: 29, marginLeft: 11}}
          source={require('../image/compare_arrows_24px.png')}
        />
        <Text style={{marginLeft: 11, marginTop: 16, color: '#000000'}}>
          Rp. 300.000
        </Text>
        <Text style={{marginTop: 16, marginLeft: 123, color: '#000000'}}>
          14/11/2021
        </Text>
        <Text
          style={{
            position: 'absolute',
            marginTop: 39,
            marginLeft: 40,
            color: '#000000',
          }}>
          Transfer to 085156540916
        </Text>
      </View>
      {/* bottomNavBar section */}
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
  rectangle1: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    marginRight: 20,
    marginLeft: 25,
    marginBottom: 10,
  },
  rectangle2: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: 55,
    marginBottom: 10,
  },
  rectangle3: {
    height: 40,
    width: 40,
    backgroundColor: 'white',
    borderRadius: 4,
    marginLeft: 75,
    marginBottom: 5,
  },
})
