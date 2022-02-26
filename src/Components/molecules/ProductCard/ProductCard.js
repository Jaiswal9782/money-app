import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./ProductCardStyle";
import Icon from 'react-native-vector-icons/AntDesign'

const ProductCard = (props) => {

	const { item } = props;

	return (
		<TouchableOpacity style={styles.item}>
			<View style={styles.imgContainer}>
				<Image style={styles.productImg} source={{ uri: item.image }} resizeMode={'contain'} />
			</View>
			<View style={styles.txtContainer} >
				<Text style={styles.title} numberOfLines={2}>{item.title}</Text>
				<View style={styles.row1} >

					<Text style={styles.price}>$ {item.price}</Text>
					<View style={styles.row} >
						<Icon name={'star'} style={styles.star} />
						<Text style={styles.price}>({item.rating.rate})</Text>
					</View>
				</View>
			</View>
		</TouchableOpacity>
	)

}

export default ProductCard;

