import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color'
const styles = StyleSheet.create({

	rowContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal:wp(6),
		paddingVertical: wp(4),

	},
	row: {
		flexDirection: "row",
	},
	iconContainer : {
		width: 32,
		height: 32,
	},
	containeContainer : {
		paddingLeft: wp(2.5),
	},
	switchContainer : {
		justifyContent: "flex-start",
		
	},
	
	swtichStyle: {
		fontSize:wp(2),
		width: wp(8),
		height: wp(2),
		marginRight: wp(6),
	},
	titleTxt: {
		fontSize : wp(3.5),
		textAlign: "left",
		fontWeight: "bold",
		color: color._25345F,
		paddingBottom:wp(1)
	},
	subTitleTxt: {
		fontSize : wp(3),
		textAlign: "left",
		color:color._222222
	},


});
export default styles;