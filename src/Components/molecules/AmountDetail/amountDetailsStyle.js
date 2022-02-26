import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color'
const styles = StyleSheet.create({
	container:{
		paddingHorizontal:wp(6),
		paddingTop:wp(2.5)
	},

	logoContainer : {
		height: wp(7.5),
		width: wp(7.5),
		marginRight:wp(2.5),
		marginTop: wp(5),
		alignSelf:'flex-end'
	},
	logoStyle: {
		width: "100%",
		height: "100%",
	},
	txt: {
		fontWeight: "bold",
		fontSize: wp(6),
		color: color._WHITE,
		marginBottom: wp(10)
	},
	txt2: {
		fontSize: wp(3.5),
		color: color._WHITE,
		textAlign: "left",
		fontWeight: "500",
		
	},
	amountContainer:{
		flexDirection: "row",
		justifyContent: 'flex-start',
		alignItems: "center",
		marginTop:wp(2.5)
		

	},
	box: {
		width: wp(10),
		height: wp(6),
		backgroundColor:color._01D167,
		borderRadius: wp(1), 
	},
	symbolStyle: {
		fontSize: wp(3.5),
		fontWeight: "bold",
		color: color._WHITE,
		textAlign: "center",
		marginTop: wp(0.75)
	},
	Amounttxt:{
		fontSize: wp(6),
		fontWeight: "bold",
		color: color._WHITE,
		marginLeft: wp(2.75),
		textAlignVertical:'center',

	},


});
export default styles;