import React from 'react';
import {TextInput} from 'react-native';
import { theme } from "../../../Constants/Theme";
import styles from './TextInputStyle';
const TextField = ({
  value,
  textFieldStyle,
  multiline,
  onSubmitEditing,
  placeholder,
  onChangeText,
  keyboardType,
  editable,
  onFocus,
  onRef,
  secureTextEntry,
  error,
  onBlur,
  disable,
  autoFocus,
  length,
  ...props
}) => (
  <TextInput
    maxLength={length}
    keyboardType={keyboardType ? keyboardType : 'default'}
    secureTextEntry={secureTextEntry ? secureTextEntry : false}
    style={[
      styles.textFieldDefault,
      textFieldStyle,
      error ? {color: 'red'} : {},
    ]}
    underlineColorAndroid={'transparent'}
    onChangeText={(text) => {
      onChangeText(text);
    }}
    value={value}
	autoFocus={autoFocus}
    editable={editable}
    placeholder={placeholder}
    onSubmitEditing={() => onSubmitEditing}
    placeholderTextColor={error ? 'red' : theme.PLACEHOLDER_1}
    ref={onRef != undefined ? onRef : null}
    onFocus={() => {
      if (onFocus !== undefined) {
        onFocus();
      }
    }}
    onBlur={() => {
      if (onBlur !== undefined) {
        onBlur();
      }
    }}
    multiline={multiline}
    {...props}
  />
);

export default TextField;
