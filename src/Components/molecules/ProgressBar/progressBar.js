import { View, Text } from 'react-native'
import React from 'react'
import styles from './progessBarStyle'
import * as Progress from 'react-native-progress';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { color } from '../../../Constants/Color';

const progressBar = (props) => {
    const { title,spendAmount,totalAmountAvaliable ,progress} = props;

  return (
    
      <View style={[styles.mainContainer]}>
      <View style={[styles.spendContainer]}>
                <Text style={[styles.spendTxt]}>{title}</Text>
                <View style = {styles.amountBox}>
                  <View style={styles.row} >
                <Text style={[styles.spendTxt2]}>{spendAmount}</Text>
                <Text style={[styles.totalAmount]}>{totalAmountAvaliable}</Text>
                </View>
                </View>
            </View>
                <Progress.Bar progress={progress} width={wp(85)} height={wp(3.5)} borderWidth={0} color={color._01D167}unfilledColor={color._e9fcf0} borderRadius={wp(2.5)}/>
               </View>
  )
}

export default progressBar