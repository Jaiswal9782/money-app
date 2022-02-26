import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from "../../Constants/Color";
import { theme } from '../../Constants/Theme';
const WIDTH = Dimensions.get('screen').width
const ITEM_WIDTH = WIDTH / 2 - wp(4)
const styles = StyleSheet.create({
    container: {
        marginBottom: wp(15),
        backgroundColor: color._Whitesmoke,
    },
    columnWrapperStyle: {
        margin: wp(1.5),
    }
});
export default styles;