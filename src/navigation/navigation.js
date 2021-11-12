import * as React from 'react'
import {View, Text} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import HomeScreen from '../screens/HomeScreen'
import TransactionHistoryScreen from '../screens/TransactionHistoryScreen'
import ProfileScreen from '../screens/ProfileScreen'
import RegistrationScreen from '../screens/RegistrationScreen'
import TopupScreen from '../screens/TopupScreen'
import ScanQScreen from '../screens/ScanQrScreen'
import TransferCheckScreen from '../screens/TransferCheckScreen'
import TopupSuccessScreen from '../screens/TopupSuccessScreen'
import QRPayConfirmScreen from '../screens/QRPayConfirmScreen'
import ScanQrScreen from '../screens/ScanQrScreen'
import PaySuccessScreen from '../screens/PaySuccessScreen'
import TransferProcessScreen from '../screens/TransferProcessScreen'
import TransferSuccessScreen from '../screens/TransferSuccessScreen'
import SplashScreen from '../screens/SplashScreen'

const Stack = createNativeStackNavigator()

function Navigation () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
          name='Splash'
          options={{animationEnabled: false, header: () => null}}
          component={SplashScreen}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{title: 'Login', headerShown: false}}
        />
        <Stack.Screen
          name='Account Registration'
          component={RegistrationScreen}
          options={{
            headerStyle: {
              backgroundColor: '#005690',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{title: 'Home', headerShown: false}}
        />
        <Stack.Screen
          name='Transaction History'
          component={TransactionHistoryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Profile'
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Top up'
          component={TopupScreen}
          options={{
            headerStyle: {
              backgroundColor: '#005690',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name='Top up Success'
          component={TopupSuccessScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='QR Payment'
          component={ScanQScreen}
          options={{
            headerStyle: {
              backgroundColor: '#005690',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name='Payment Confirmation'
          component={QRPayConfirmScreen}
          options={{
            headerStyle: {
              backgroundColor: '#005690',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name='Payment Complete'
          component={PaySuccessScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='Transfer to'
          component={TransferCheckScreen}
          options={{
            headerStyle: {
              backgroundColor: '#005690',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name='Transfer Confirmation'
          component={TransferProcessScreen}
          options={{
            headerStyle: {
              backgroundColor: '#005690',
            },
            headerTitleStyle: {
              color: 'white',
            },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name='Transfer Success'
          component={TransferSuccessScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;
