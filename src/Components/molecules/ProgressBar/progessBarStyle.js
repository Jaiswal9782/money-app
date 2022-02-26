import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color'
import { theme } from '../../../Constants/Theme'
const styles = StyleSheet.create({

    mainContainer:{
// alignItems:'center'
paddingLeft:wp(6)
	},
		spendContainer:{
		// width: wp(95),
		paddingVertical:wp(2.5),
		flexDirection: "row",
		justifyContent: "space-between"
	},
	row:{
		flexDirection: "row",

	},
	spendTxt:{
		color: color._222222,
		fontSize: wp(3.5),
		marginTop: wp(5),
		fontWeight: "bold",
	},
	spendTxt2:{
		color: color._01D167,
		fontSize: wp(3.5),
		marginTop: wp(5),
		fontWeight: "bold",
	},
	totalAmount:{
		color: color._555555,
		fontSize: 13,
		marginTop: 20,
		fontWeight: "bold",
		paddingRight: wp(6),
		paddingLeft: wp(1.5),
	},
	amountBox :{
		flexDirection : "row",
	},


});
export default styles;