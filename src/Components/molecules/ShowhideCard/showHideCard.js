
import { View, Text, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './showHideCardStyle'

const ShowhideNumber = (props) => {
    const { title, imageSource ,style,onPress} = props;
    return (
        <TouchableOpacity style={[styles.showContainer,style]}  onPress={()=>{onPress()}} >
            <View style = {styles.imageContainer}>
                <Image source={imageSource} style={styles.imgStyle} />
            </View>
            <Text style={styles.txt}>{title}</Text>
        </TouchableOpacity>
    )
}

export default ShowhideNumber