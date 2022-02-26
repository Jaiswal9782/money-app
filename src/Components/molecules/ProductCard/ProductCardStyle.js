import { StyleSheet, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color'
import { theme } from '../../../Constants/Theme'

const WIDTH = Dimensions.get('screen').width
const ITEM_WIDTH = WIDTH / 2 - wp(4)
const styles = StyleSheet.create({
	item: {
		backgroundColor: color._WHITE,
		width: ITEM_WIDTH,
		borderRadius: wp(2.5),
		margin: wp(0.5),
		overflow: 'hidden',

		marginLeft: wp(1.5),
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.34,
		shadowRadius: 6.27,

		elevation: 10,
	},
	txtContainer: {
		justifyContent: 'center',
		// alignItems: 'center',
		marginTop: wp(1),
		paddingHorizontal: wp(2.5)
	},
	title: {
		fontSize: wp(3),
		fontWeight: "bold"

	},
	price: {
		fontSize: wp(3),
		fontWeight: "500",
		paddingVertical: wp(2),
	},
	imgContainer: {
		width: ITEM_WIDTH,
		height: wp(40),
		backgroundColor: color._smoke,
	},
	star: {
		color: color._yellow,
	},
	row1: {
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center'

	},
	productImg: {
		width: '100%',
		height: '100%',

	},




});
export default styles;