import { StyleSheet, Platform, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from "../../Constants/Theme";
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
	flex1: {
		flex: 1,
		backgroundColor:color._WHITE
	},
	safeAreaView:{
		flex: 0,
		backgroundColor:color._WHITE
	},
	container: {
		flex: 1,
		paddingHorizontal:wp(3.75),

	},
	errorStyle:{

		borderBottomColor:color._error
	},
	buttonStyle: {
		position :"absolute",
		bottom: wp(6),
		width: wp(76),
		backgroundColor: color._01D167,
		padding: wp(5),
		borderRadius: wp(12),
		marginHorizontal: wp(12),
		alignItems: 'center',
		elevation: wp(1),

	  },
	  buttonTxt : {
		  color : color._WHITE,
		  fontWeight: "bold",
		  fontSize: wp(3.75)
	  },
	textAreaContainer:{

	},
	titleInfo: {
		paddingHorizontal:0,
		paddingVertical:wp(1.25),

	},
	titleInfoText: {
		color: theme.LABLE_COLOR,
		fontWeight: '700',
		fontSize:wp(4.5),
	},
	inputLabel: {
		marginTop: wp(5),
		marginBottom: wp(2),
		color: theme.PRIMARY_TEXT_COLOR_WHITE,
		fontSize: wp(4), //15
	}, 
	inputView: {
		height: wp(25),
		borderWidth: 1,
		borderColor: theme.Input_View_Border,
		fontSize: wp(4.5),
		marginBottom: wp(2),
	},
	textArea: {
		marginVertical:wp(5),
	},
	uploadButton:{
		height: wp(10),
		backgroundColor:theme.action_Buttons_BG,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: wp(2.5),
		marginBottom: wp(5),
		borderRadius:wp(1.25),
	},
	uploadButtonTxt:{
		color:theme.PRIMARY_TEXT_COLOR_WHITE,
		fontSize: wp(4),
	},
	uploadButtonIcon:{
		fontSize: wp(5),
		color: theme.PRIMARY_TEXT_COLOR_WHITE,
	},
	uploadImgContainer:{
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	uploadImgCol:{
		width: (WIDTH / 3) - 16,
		height: wp(25),
		backgroundColor: theme.PRIMARY_CARD_BG,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		elevation: 5,
		margin: 3,
		borderWidth: 1,
		borderColor: theme.Upload_Border,
	},
	uploadedImg:{
		width: '100%',
		height: '100%',
	},
	uploadImgDeletBtn:{
		position: 'absolute',
		top: 2,
		right: 2,	
		zIndex:1200
	},
	uploadDeletBtnIcon:{
		fontSize: wp(5),
		backgroundColor: theme.PRIMARY_TEXT_COLOR_BLACK,
		color:theme.PRIMARY_TEXT_COLOR_WHITE,
		borderRadius: wp(25),
	},
	submitBtnContainer: {
		justifyContent: 'flex-end',
		padding: wp(3.75),

	},
	dropInputContainer: {
		borderColor: theme.Input_View_Border,
		borderWidth: wp(0.25),
		height: wp(12.5),
		width: '100%',
		backgroundColor:theme.PRIMARY_BG,
		justifyContent: 'center',
		paddingLeft: wp(2.5),
		borderRadius:5,
	},
	dropdownIcon: {
		color:theme.LABLE_COLOR,
	},
	listStyle: {
		width: '100%',
		backgroundColor: theme.PRIMARY_BG,
		borderColor: theme.Input_View_Border,
		borderWidth: 1,
		elevation: 5,
		zIndex: 1,
		...Platform.select({
			android: {
				minHeight: wp(20),
				position: 'absolute',
				top: wp(12.5),
			}
		})

	},
	placeholderStyle: {
		color:theme.Leave_Type_Text, 
		fontSize: wp(4),
		fontWeight: '600',
	},
	//// modal
	// buttonView1: {
	// 	borderRadius: wp(2.5),
	// 	overflow: 'hidden',
	// 	backgroundColor: theme.Leave_Type_Text,

	// },
	// Heading: {
	// 	fontSize: wp(4.5),
	// 	color:theme.PRIMARY_TEXT_COLOR_BLACK,
	// 	letterSpacing: wp(0.075), //0.3
	// },
	// btn1: {
	// 	width: '100%',
	// 	backgroundColor: theme.PRIMARY_BG,
	
	// 	flexDirection: 'row',
	// 	alignItems: 'center',
	// 	paddingVertical: wp(3.5),
	// 	paddingHorizontal: wp(7.5),
	// },
	// middleBtn: {
	// 	borderTopWidth: wp(0.3), //1.2
	// 	borderBottomWidth: wp(0.3), // 1.2
	// 	borderColor: theme.Input_View_Border,
	// },
	// camaraIcon: {
	// 	fontSize: wp(5.25), //21
	// 	color:theme.PRIMARY_TEXT_COLOR_BLACK,
		
	// },
	// btn1Txt: {
	// 	fontSize: wp(4),
	// 	color:theme.PRIMARY_TEXT_COLOR_BLACK,
	// 	paddingLeft: wp(5),
	// 	letterSpacing: wp(0.125),
	// },
	// imageIcon: {
	// 	fontSize: wp(5.5),
	// 	color:theme.PRIMARY_TEXT_COLOR_BLACK,

	// },
	

});
export default styles;