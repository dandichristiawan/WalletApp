import React, {useRef, useState, useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const SplashScreen = props => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 4000);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      props.navigation.replace('Login');
    }
  }, [authLoaded, props.navigation]);

  return (
    <View style={{flex: 1, backgroundColor:'#005690'}}>
      <Image style={{marginLeft: 110, marginTop: 85}} source={require('../image/pngaaa1.png')}/>
      <Text style={{marginTop: 38, marginLeft: 86, fontSize: 36, fontWeight: 'normal', color: '#FFFFFF'}}>E-Wallet Apps</Text>
      <Text style={{marginTop: 14, marginLeft: 97, fontSize: 36, fontWeight: 'normal', color: '#FFFFFF'}}>Final Project</Text>
      <Text style={{marginTop: 7, marginLeft: 94, fontSize: 36, fontWeight: 'normal', color: '#FFFFFF'}}>React Native</Text>
    </View>
  );
};

export default SplashScreen;