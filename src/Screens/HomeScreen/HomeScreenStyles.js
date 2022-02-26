import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { color } from '../../Constants/Color';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        // marginVertical: wp(2.5),
        backgroundColor:color._WHITE
    },
    safeAreaView:{
        flex: 0,
        backgroundColor:color._WHITE
    },

    itemBox: {
        padding: wp(2.5),
        margin: wp(2.5),
        backgroundColor: color._WHITE,
        marginVertical: wp(2.5),
        borderRadius: wp(2.5),
        borderWidth:0.5,
        borderColor:color._ccc,
      
    },
    itemBoxRow2: {
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    itemBoxRow: {
        flexDirection: 'row',
    },
    titleTxt: {
        fontSize: wp(4),
        color: color._222222,
        fontWeight: '500',
        paddingTop: wp(1),
    },
    dateTxt: {
        fontSize: wp(4),
        color: color._0075bf,
        fontWeight: '500',
        paddingTop: wp(1),
    },
    amountTxt: {
        fontSize: wp(4.5),
        color: color._RED,
        fontWeight: '500',
        paddingTop: wp(1),
    },
    discriptionTxt: {
        fontSize: wp(3.5),
        color: color._222222,
        paddingTop: wp(1),
    },
});
export default styles;
