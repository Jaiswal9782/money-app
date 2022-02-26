import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './SwitchStyle'
import * as resources from 'resources';

const Switch = ({ value, onPress, textStyle, size = 50, ...props }) => (
	<TouchableOpacity onPress={onPress} {...props}>
		<Image style={[styles.image,value===true?styles.active:styles.inActive]} source={value===true?resources.ON:resources.OFF} />
	</TouchableOpacity>
);

export default Switch;
