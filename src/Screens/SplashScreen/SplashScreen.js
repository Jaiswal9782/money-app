import React from "react";
import { View, Text, Image,SafeAreaView } from "react-native";
import styles from "./SplashScreenStyle";
import * as resources from 'resources';

const SplashScreen = ({ navigation}) => {
setTimeout(() => {
	navigation.navigate('MyTab')
}, 2000);
	
	return (
		<View  style={[styles.container]}>
		<SafeAreaView style={styles.safeAreaView}/>
		<Image  style={styles.imgLogo} source={resources.Logo} />
		</View>
	);
}



export default SplashScreen;
