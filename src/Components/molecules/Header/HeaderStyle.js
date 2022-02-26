import { StyleSheet, StatusBar, Platform } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color'
import { theme, } from '../../../Constants/Theme'
const styles = StyleSheet.create({

	headerMain: {
		backgroundColor: color._0C365A,
		paddingBottom: wp(4.5),
		borderBottomRightRadius: 30,
		borderBottomLeftRadius: 30,
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center',

		...Platform.select({
			ios: {
				paddingTop: wp(3),
			},
			android: {

			},
		}),
	},
	logoBox: {
		height: wp(25),
		width: wp(100),
		...Platform.select({
			ios: {
				paddingTop: wp(12.5),
			},
			android: {
				paddingTop: wp(7),
			},
			web: {
			},
		}),
		paddingBottom: wp(5),
	},
	homeImg: {
		alignSelf:'center'
	},

	headerContainer: {
		backgroundColor: color._WHITE,
		width: '100%',
		paddingLeft: wp(3.75),
		paddingVertical: wp(2.5),
		flexDirection: 'row',
		justifyContent: 'space-between',
		...Platform.select({
			ios: {
				paddingTop: wp(3),
			},
			android: {
				paddingTop: StatusBar.currentHeight,
				// 
			},
		}),
	},

	headerHomeIcon: {
		fontSize: wp(10),
		// color:'#000',
		color: theme.THEME_COLOR,
		marginLeft: -wp(2.5),
	},
	headerLeft2: {
		flex: .7,
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		flexDirection: 'row',
	},

	header: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	HeaderHomeText: {
		justifyContent: 'center',
		fontSize: wp(5),
		fontWeight: '700',
		paddingLeft: 1,
		color: theme.THEME_COLOR,
	},



});
export default styles;