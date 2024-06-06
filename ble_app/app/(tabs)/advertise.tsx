import BleAdvertise from "react-native-ble-advertise";
const { v4: uuidv4 } = require('uuid');

const companyId: string = "0x0000";
const uuid = "44C13E43-097A-9C9F-537F-5666A6840C08";
const major = parseInt("CD00", 16);
const minor = parseInt("0003", 16);


export const generatePacket = () => {

    // let myuuid = uuidv4(); //generate random uuid in uuidv4 format
    BleAdvertise.setCompanyId(companyId);
    BleAdvertise.broadcast(uuid, major, minor)
            .then(success => {
                console.log('broadcast started');
            }).catch(error => { 
        console.log('broadcast failed with: ' + error);
    });

    return async () => {      
        console.log("work");               
    };
  };