import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color._0C365A,
	},
	safeAreaView:{
        flex: 0,
		backgroundColor: color._0C365A,
    },
	upperContainer: {
		flex: 0.20,
	},
	logoContainer: {
		marginRight: wp(6),
		marginTop: wp(8.5),
		alignSelf: "flex-end",
	},
	logoStyle: {
		marginVertical: wp(2),
		width: wp(6),
		height: wp(6)
	},
	spendContainer: {
		marginTop: wp(3),
		left: wp(6),
	},
	spendTitle: {
		color: color._WHITE,
		fontWeight: "bold",
		fontSize: wp(6)
	},

	lowerContainer: {
		flex: 1,
		backgroundColor: color._WHITE,
		borderTopLeftRadius: wp(6),
		borderTopRightRadius: wp(6),
		paddingHorizontal: wp(6),
	},
	innerContainer: {
		flexDirection: "row",
		justifyContent: "flex-start",
		marginTop: wp(7),
	},
	imgConatiner: {
		marginBottom: wp(2)
	},
	meterLogoStyle: {
		marginVertical: wp(0.90),
		width: wp(4),
		height: wp(4),
	},
	txtStyle: {
		fontSize: wp(3.5),
		color: color._222222,
		fontWeight: "700",
		paddingHorizontal: wp(4)
	},
	boxContainer:{
		flexDirection: "row",
		alignSelf: "flex-start",
		marginTop: wp(1),
		marginBottom:wp(2.5),
		alignItems: "center",
		
		
	},
	box: {
		paddingVertical: wp(0.50),
		paddingHorizontal: wp(3),
		backgroundColor:color._01D167,
		borderRadius: wp(1),

	},
	symbolStyle: {
		fontSize: wp(3.3),
		fontWeight: "bold",
		color: color._WHITE,
	},
	inputBox: {
		width: wp(40),
		borderBottomWidth: 0,
		padding: wp(0),
		fontSize : wp(6),
		fontWeight : "700",
		marginLeft: wp(2)
	  },
	  errorStyle:{
		borderTopColor:color._error,
  
	  },
	  
	  txtContainer2:{
		borderTopColor:color._BLACK
		 
	},
	  txtContainer:{
		  borderTopWidth:1,
		  paddingTop : wp(2.5),
		   
	  },
	  txtStyle2:{
		  fontSize : wp(3.2),
		  color: color._22222266,
	  },	  
	  SpendAmountConatiner: {
		  flexDirection: "row",
		  justifyContent: "space-around"
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
	  }


});
export default styles;