

import { StyleSheet, StatusBar } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
const styles = StyleSheet.create({
	container: {
        paddingTop: wp(8),
    },
    amountContainer: {
        backgroundColor: color._e9fcf0,
        borderRadius: wp(1),
        paddingVertical: wp(3),
        paddingHorizontal: wp(7),
        alignSelf : "flex-start",

    },
    txtStyle : {
        fontSize : wp(3),
        fontWeight : "bold",
        textAlign : "center",
        color : color._20D167
    }

});
export default styles;