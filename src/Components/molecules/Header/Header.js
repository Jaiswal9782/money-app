import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { } from "react-redux";
import styles from "./HeaderStyle";
import Icon2 from "react-native-vector-icons/Feather";
import * as resources from 'resources';
const Header = (props) => {

	const { title, isTab, containerStyle, iconLeftStyle, titleStyle, headeBackIcon, _onLeftAction, isHome,  } = props;

	if (isHome) {
		return (
			<View style={[styles.headerMain]}>
				<View style={styles.logoBox} >
					<Image source={resources.AspireLogo} style={styles.homeImg} />
				</View>
				
			</View>
		)
	
	}
	else {
		return (
			<View style={[styles.headerContainer, containerStyle]} >
				<View style={styles.headerLeft2}>
					<View style={[styles.header, iconLeftStyle]}>
						{!isTab &&
							<TouchableOpacity onPress={() => { _onLeftAction() }}>
								<Icon2 name='chevron-left' style={[styles.headerHomeIcon, headeBackIcon]} />
							</TouchableOpacity>}
							{title&&
					<Text style={[styles.HeaderHomeText, titleStyle]}>{title}</Text>}
					</View>

				</View>
				
				<View style={[styles.headerRight2]}>
					
				
				</View>
			</View>
		);

	}
}

export default Header;

