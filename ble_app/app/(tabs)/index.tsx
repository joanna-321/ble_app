import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from "react-redux";
import { generatePacket } from "../(tabs)/advertise";

export default function App() {

  const dispatch = useDispatch(); // Get the dispatch function

  return (
    <View style={styles.container}>
      <Button 
        title="Press me"
        onPress ={() => {
          dispatch(generatePacket());
          alert('ad sent');
        }} />
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
