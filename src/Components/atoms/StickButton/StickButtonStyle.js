import { StyleSheet, } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../../Constants/Color";
const styles = StyleSheet.create({
	plusButton: {
		position: 'absolute',
		right: 15,
		bottom: 15,
		width: wp(12.75),
		height: wp(12.75),
		backgroundColor: color._WHITE,
		borderRadius: wp(50),
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.32,
		shadowRadius: 5.46,

		elevation: 9,

	},
	plusButtonView: {
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.30,
		shadowRadius: 4.65,

		elevation: 8,
	},
	iconStyle: {
		fontSize: wp(8),
		color: color._0C365A,
	}

});
export default styles;

