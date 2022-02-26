import { StyleSheet, Dimensions, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { theme } from "../../../Constants/Theme";
import { color } from '../../../Constants/Color';

const width = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(width - 70);
const styles = StyleSheet.create({
	textFieldDefault: {
		height: 50,
		width: '100%',
		color:color._BLACK,
		fontSize: wp(4),
	}

});
export default styles;

