import React, {Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {navigationRef} from './src/helpers/rootNavigation';
import * as RootNavigation from './src/helpers/rootNavigation';

import Home from './src/screens/Home';
import Promo from './src/screens/Promo';

import PushNotification from 'react-native-push-notification';

PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
    if (notification.data.navigation) {
      RootNavigation.navigate(notification.data.navigation);
    }
  },
});

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Promo" component={Promo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
