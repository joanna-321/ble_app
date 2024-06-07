import { Button, StyleSheet, Text, View } from 'react-native';
import { generatePacket } from './packetFormat';

const Advertise: React.FC  = ()  => {
    return (
      <View style={styles.container}> 
        <Button 
          title="Press me"
          onPress ={() => {
            // generatePacket();
            alert('ad sent');
          }} />
      </View>
    );
  
};

export default Advertise;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  