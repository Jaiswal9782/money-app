import React from 'react';
import {View, Text} from 'react-native';
import styles from './NoRecordStyles';
import {TextInput} from 'Atoms';

import Icon from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/Ionicons';

export const NoRecord = (props) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [icon, setIcon] = React.useState('eye-with-line');

  const {
    title,
    mainContainerStyle,textStyle
  } = props;
 
  return (
    <View style={[styles.inputBoxContainer, mainContainerStyle]}>
      {title ?
        <Text style={[styles.inputLableTaxt, textStyle]}>{title}</Text>:
        <Text style={[styles.inputLableTaxt, textStyle]}>{'No Record Found'}</Text>

      }
      
    </View>
  );
};

export default NoRecord;
