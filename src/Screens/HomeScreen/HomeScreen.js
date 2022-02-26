import React from "react";
import { View, Text, FlatList,SafeAreaView } from "react-native";
import styles from "./HomeScreenStyles";
import { useSelector } from "react-redux"
import { StickButton, NoRecord } from 'Atoms';
import {Header} from 'Molecules';
import {Empty_message_home} from '../../Constants/constant';
import LinearGradient from 'react-native-linear-gradient';
import { color } from "../../Constants/Color";
const HomeScreen = ({ navigation, route }) => {
	const [data, setData] = React.useState([])
	const [refresh, setRefresh] = React.useState(false)

	const Expenditure = useSelector((state) => state.spending)

	React.useEffect(() => {
		setData(Expenditure.spendData)
		setRefresh(!refresh)
	}, [])
	React.useEffect(() => {
		setData(Expenditure.spendData)
		setRefresh(!refresh)
	}, [Expenditure.spendData])
	const goToExpense = () => {
		navigation.navigate('AddExpense')
	}

	const renderItem = ({ item }) => {
		return (
			<LinearGradient colors={[color._WHITE, color._ccc,color._Gradient2]} style={styles.itemBox} start={{x:1,y:1}} end={{x:0 ,y:0}} >
				<View style={styles.itemBoxRow2} >
					<Text style={styles.dateTxt} >{item.date}</Text>
					<Text style={styles.amountTxt} >{item.amount+" $"}</Text>
				</View>
				<View style={styles.itemBoxRow} >
					<Text style={styles.titleTxt} >{item.title}</Text>
				</View><View style={styles.itemBoxRow} >
					<Text style={styles.discriptionTxt} >{item.description}</Text>
				</View>
			</LinearGradient>
		)
	}
	return (
		<View style={styles.mainContainer}>

		<Header isHome />
		<View style={styles.mainContainer}>
			<SafeAreaView style={styles.safeAreaView}/>
			{data.length > 0 ? <FlatList
				refreshing={refresh}
				data={data}
				renderItem={renderItem}
			/> :
				<NoRecord title={Empty_message_home} />}
			<StickButton onPress={() => goToExpense()} />
		</View>
		</View>
		// </>
	);
}



export default HomeScreen;
