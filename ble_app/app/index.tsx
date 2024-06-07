//original code
import { Button, StyleSheet, Text, View } from 'react-native';
import generatePacket, { } from './packetFormat';

export default function Index() {
  return (

    generatePacket()
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