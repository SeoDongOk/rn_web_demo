import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyTabs from './app/home/Home';

export default function App() {
  return (
    <View style={[styles.container, StyleSheet.absoluteFill]}>
      <Text>Hello</Text>
      <MyTabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  br: {
    height: 12,
  },
  btn: {
    backgroundColor: '#222',
    padding: 10,
  },
  btnText: {
    color: '#fff',
  },
});
