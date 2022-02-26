import React from "react";
import { View, Text,Image } from "react-native";
import styles from "./RowItemStyle";
import {Switch} from 'Atoms';

const RowItem = (props) => {


	const { subTitle,title,value,onValueChange,imageSource,isSwitch,inactiveTrackColor,activeThumbColor,inactiveThumbColor,activeTrackColor, containerStyle } = props;

		return(
			<View style={[styles.rowContainer,containerStyle ]} >
                	
                <View style={styles.row}>

                    <View style={styles.iconContainer}>
                        <Image source={imageSource} style={[styles.imgStyle]} />
                    </View>
                    <View style={styles.containeContainer}>
                        <Text style={[styles.titleTxt]}>{title}</Text>
                        <Text style={[styles.subTitleTxt]}>{subTitle}</Text>
                    </View>
                </View>

               {isSwitch && 
               <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: inactiveTrackColor, true: activeTrackColor }}
                        thumbColor={value ? inactiveThumbColor : activeThumbColor}
                        onPress={onValueChange}
                        value={value}
                        style={[styles.swtichStyle]}
                        
                    />
                </View>}
	
			 </View>
               
		)
	
}

export default RowItem;

