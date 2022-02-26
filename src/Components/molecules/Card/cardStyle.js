import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color'
import { theme } from '../../../Constants/Theme'
const styles = StyleSheet.create({
	container:{
		flex:1,
		marginHorizontal:wp(3.5)

	},
	cardContainer:{
		height: wp(55),
		borderRadius:wp(6),
		backgroundColor: color._01D167,
		zIndex: 0,
	},
	showhideButton:{
		position:'relative',
		bottom: -18
	},
	imgStyle: {

	},
	cardLogoContainer: {
		width: wp(18.5),
		height: wp(5.25),
		alignSelf: 'flex-end',
		marginRight: wp(6),
		marginTop: wp(6),
	},
	LogoStyle: {
		width:'100%',
		height:'100%',
	},
	detailStyle: {
		marginTop: wp(-12)
	},
	nameText:{
		fontSize: 22,
		color: color._WHITE,
		fontWeight: "bold",
		marginTop: 69,
		marginLeft:wp(6),
		height:wp(7.5),
		width: wp(33.5)
	},
	NumberText: {
		fontSize: wp(4),
		color:color._WHITE,
		marginTop: 20,
		marginLeft:24,
		fontWeight: "400",
		letterSpacing: 5,
	},
	
	NumberText2: {
		fontSize: wp(4),
		marginTop: wp(5),
		marginLeft:wp(6),
		fontWeight: "400",
		letterSpacing: 5
	},
	txtContainer: {
		flexDirection: "row",
		width: 176,
		height: 17, 
		marginLeft: 26,
		marginTop: 12,
	},
	dateText: {
		fontSize: 13,
		textAlign: "left",
		width:81,
		height: 17,
		color: color._WHITE,
		fontWeight: "normal"
	},
	cvvText: {
		fontSize: 13,
		marginLeft: 10,
		color: color._WHITE,
	},
	cardLogoContainer2: {
		width: wp(14.75),
		height: wp(5),
		alignSelf: 'flex-end',
		marginRight: wp(6),
		marginBottom: wp(6),

	},
	LogoStyle2: {
		width: "100%",
		height: "100%",
	}


});
export default styles;