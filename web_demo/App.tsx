import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  useWindowDimensions,
} from 'react-native';

export default function App() {
  const {height} = useWindowDimensions();
  const [getnumber, setNumber] = useState<number>(0);

  function handlePress() {
    let dummyNumber = parseInt(`${Math.random() * 10000}`, 10);
    setNumber(dummyNumber % 100);
  }

  return (
    <View style={[styles.container, {height}, StyleSheet.absoluteFill]}>
      <Text>Random number: {getnumber}</Text>
      <View style={styles.br} />
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
          styles.btn,
        ]}
        onPress={handlePress}>
        <Text style={styles.btnText}>Generate a number</Text>
      </Pressable>
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
