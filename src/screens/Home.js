import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={styles.root}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Promo')}>
          <Text> Home </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
