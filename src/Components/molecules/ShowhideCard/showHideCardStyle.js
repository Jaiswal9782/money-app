

import { StyleSheet} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';
const styles = StyleSheet.create({
    
	showContainer: {
        backgroundColor: color._WHITE,
        paddingTop: wp(1.5),
        paddingBottom: wp(5.5),
        borderTopLeftRadius: wp(1.2),
        minWidth: wp(40),
        borderTopRightRadius: wp(1.2),
        alignSelf: "flex-end",
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    txt: {
        color: color._01D167,
        textAlign: "center",
        paddingLeft: wp(1.25),
        fontSize: wp(3),
        fontWeight: '700',
    },
    imageContainer: {
        width : wp(5),
        height: wp(5),
    },
    imgStyle: {
        width : "100%",
        height: "100%",
    }


});
export default styles;