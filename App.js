import React from 'react';
import { StyleSheet, View } from 'react-native';
import Badbunny from './Badbunny';

export default function App() {
  return (
    <View style={styles.container}>
      <Badbunny></Badbunny>
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
});

