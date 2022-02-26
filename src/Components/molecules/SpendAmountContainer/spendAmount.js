
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './spendAmountStyle'
import React from 'react'

const spendAmount = (props) => {
	const { title,onPress} = props;
  return (
    <TouchableOpacity style = {styles.container} onPress={onPress}>
        <View style = {styles.amountContainer}>
      <Text style = {styles.txtStyle}>S$ {title}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default spendAmount