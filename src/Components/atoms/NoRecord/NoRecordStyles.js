import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
import { theme } from "../../../Constants/Theme";

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
	inputBoxContainer: {
		flex:1,
		justifyContent:"center",
		alignItems:'center',
	},
	inputLableTaxt: {
		fontSize:wp(4.5),
		textAlign:'center'
		
	},
		

});
export default styles;

