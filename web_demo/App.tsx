import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
  return (
    <View style={[styles.container, StyleSheet.absoluteFill]}>
      <Text>Hello</Text>
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
