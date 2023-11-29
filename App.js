import { useKeepAwake } from 'expo-keep-awake';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export default function App() {
  useKeepAwake();
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
      <TextInput  
        style={styles.numericInput}
        onChangeText={(v) => {onChangeNumber(v)}}
        value={number}
        keyboardType="numeric"
      />
      <StatusBar style="auto" />
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
  numericInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }
});
