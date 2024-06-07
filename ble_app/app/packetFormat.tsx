import BleAdvertise from "react-native-ble-advertise";
// const { v4: uuidv4 } = require('uuid');
import { useState } from 'react';
import { Platform, View, Button, Text, ActivityIndicator, StatusBar } from 'react-native'; 
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { useDispatch } from 'react-redux'
import { broadcast, setCompanyId, stopBroadcast } from 'react-native-ble-advertise';


const companyId = parseInt("0x0000");
const uuid = "44C13E43-097A-9C9F-537F-5666A6840C08";
const major = parseInt("CD00", 16);
const minor = parseInt("0003", 16);



// STEP TWO: 
export default function generatePacket(){

    const requestPermission = async () => {
        return await request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY);
    };

//const delay = (ms: number | undefined) => new Promise((res) => setTimeout(res, ms));

//not quite sure if relevant/what it does?
// export const usePermissions = () => {

// const dispatch = useDispatch();

//   useEffect(() => {
//     (async () => {

//       await delay(1000);  //Important to add if you need other requset

//       if (IS_IOS) {
//         const result = await requestPermission();
//         if (result === RESULTS.GRANTED) {
//           await firebase.analytics().setAnalyticsCollectionEnabled(true);
//         } else {
//           await firebase.analytics().setAnalyticsCollectionEnabled(false);
//         }
//       }
//     })();
//   }, [dispatch]);
// };


    //STEP THREE:
    const [isAdvertising, setIsAdvertising] = useState(false);

    const startAdvertising = async () => {
        
        requestPermission();
        // if(Platform.OS != 'android') await requestPermission(); //can take this line out if it doesn't work

        setCompanyId("0x0000");  //error because setCompanyId expects a string...
        setIsAdvertising(true);
        broadcast(uuid, major, minor).catch((error) => {
            console.log(error);
            setIsAdvertising(false);
        });

    };

    const stopAdvertising = async() => {
        setIsAdvertising(false);
        await stopBroadcast();
    }


  return (
    <View>
      <Button title={'Start advertising'} onPress={startAdvertising} disabled={isAdvertising} />
      <Button title={'Stop advertising'} onPress={stopAdvertising} disabled={!isAdvertising} />
      {isAdvertising && (
        <>
          <Text>Advertising</Text>
          <ActivityIndicator size="large" color="black" />
        </>
      )}
      <StatusBar/>
    </View>
  );
}


