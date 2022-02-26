import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./DetailScreenStyle";
import { SpendAmountConatiner } from 'Molecules'
import * as resources from 'resources';
import { setSpendingAmtLimit } from '../../Store/spending';
import { useDispatch } from "react-redux";
import moment from 'moment';
const date = moment().format("DD MMM YYYY");
const expireDate = moment(Date.now() + 7 * 24 * 3600 * 1000).format('DD MMM YYYY');

const DetailScreen = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [amount, setAmount] = React.useState("");
	const [messageError, setMessageError] = React.useState(false);


	const saveSpendingLimit = () => {
		if (amount !== "") {
			let data = {
				amount: amount,
				date: date,
				expireDate: expireDate,
			}
			dispatch(setSpendingAmtLimit(data, navigation))
		} else {
			setMessageError(true)
		}
	}

	return (
		<View style={styles.container}>
			<SafeAreaView style={styles.safeAreaView} />
			<View style={styles.upperContainer}>
				<View style={styles.logoContainer}>
					<Image source={resources.Logo} style={styles.logoStyle} />
				</View>
				<View style={styles.spendContainer}>
					<Text style={[styles.spendTitle]}>Spending Limit</Text>
				</View>
			</View>

			<View style={styles.lowerContainer}>
				<View style={styles.innerContainer}>
					<View style={styles.imgConatiner}>
						<Image source={resources.GroupMeter} style={styles.meterLogoStyle} />
					</View>
					<View >
						<Text style={styles.txtStyle}>Set a weekly debit card spending limit</Text>
					</View>
				</View>
				<View style={styles.boxContainer}>
					<View style={[styles.box]}>
						<Text style={styles.symbolStyle}>S$</Text>
					</View>
					<View>
						<TextInput style={styles.inputBox}
							onChangeText={(value) => { setAmount(value), setMessageError(false) }}
							value={amount}
							keyboardType={"number-pad"}
						/>
					</View>
				</View>
				<View style={[styles.txtContainer, messageError === true ? styles.errorStyle : styles.txtContainer2]}>
					<Text style={styles.txtStyle2}>Here weekly means the last 7 days - not the calendar week</Text>
				</View>

				<View style={styles.SpendAmountConatiner}>
					<SpendAmountConatiner
						title={'5,000'}
						onPress={() => { setAmount("5000") }}
					/>
					<SpendAmountConatiner
						title={'10,000'}
						onPress={() => { setAmount("10000") }}
					/>
					<SpendAmountConatiner
						title={'20,000'}
						onPress={() => { setAmount("20000") }}
					/>
				</View>
				<TouchableOpacity style={styles.buttonStyle} onPress={() => saveSpendingLimit()} >
					<Text style={styles.buttonTxt}>Save</Text>
				</TouchableOpacity>

			</View>

		</View>
	);
}



export default DetailScreen;
