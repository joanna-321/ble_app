import React, { SyntheticEvent } from 'react';
import BleAdvertise from "react-native-ble-advertise";


type ButtonProps = {
	text: string;
	type?: 'button' | 'submit';
	onClick?: (e: SyntheticEvent) => void;
};

function Button({ onClick, text, type = 'button' }: ButtonProps) {

	// BleAdvertise.setCompanyId(0x0000);

	return (
		<button
			className="px-4 py-2 bg-blue-600 border border-blue-700 text-white hover:bg-blue-700 hover:border-blue-800 rounded-md"
			onClick={onClick}
			type={type}
		>
			{text}
		</button>
	);
}

export default Button;

// import React from 'react';
// import {
//   StyleSheet,
//   Button,
//   View,
//   SafeAreaView,
//   Text,
//   Alert,
// } from 'react-native';

