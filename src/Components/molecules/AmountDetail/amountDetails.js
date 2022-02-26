
import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './amountDetailsStyle'

const AmountDetails = (props) => {
	const { title,balanceTitle,amount, imageSource,amountSymbol} = props;

	return (
		<View style={styles.container}>
			<View style={[styles.logoContainer]}>
				<Image source={imageSource} style={[styles.logoStyle]} />
			</View>
			<View style={[styles.innerContainer]}>
			<Text style={[styles.txt]}>{title}</Text>
			<Text style={[styles.txt2]}>{balanceTitle}</Text>
			<View style={[styles.amountContainer]}>
				<View style={[styles.box]}>
					<Text style= {styles.symbolStyle}>{amountSymbol}</Text>
					</View>
				<Text style={[styles.Amounttxt]}>{amount}</Text>
			</View>
			</View>
		</View>
	)
}

export default AmountDetails