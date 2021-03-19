import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';

import PushNotification from 'react-native-push-notification';

export default function Root() {
  const navigation = useNavigation();
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification.data);
    },
  });

  return (
    <View>
      <Text />
    </View>
  );
}
