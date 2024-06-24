/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import ResponsiveText from './ResponsiveText';
import Color from '../config/color';
import Colors from '../config/color';

type Props = {
  text?: string;
  textStyle?: any;
  onPress?: () => void;
  containerStyle?: any;
  leftIcon?: any;
  leftIconStyle?: any;
  right?: any;
  rightIconStyle?: any;
  loading?: boolean;
  disabled?: boolean;
  thin?: boolean;
  medium?: boolean;
  rounded?: boolean;
  transparent?: boolean;
};

const Button: React.FC<Props> = ({
  medium,
  leftIcon,
  textStyle,
  disabled,
  loading,
  onPress,
  containerStyle,
  leftIconStyle,
  text,
  rightIconStyle,
  right,
  transparent,
}) => (
  <TouchableOpacity
    disabled={loading || disabled}
    onPress={onPress}
    style={[
      styles.ButtonStyle,
      {
        height: wp('10%'),
        borderRadius: 25,
        backgroundColor: transparent ? 'transparent' : Color.ButtonBackground,
      },
      containerStyle,
    ]}>
    <View style={[styles.leftStyle, leftIconStyle]}>{leftIcon}</View>

    {(loading && <ActivityIndicator size={'small'} color={'#fff'} />) ||
      (text && (
        <ResponsiveText
          bold
          medium={medium}
          style={{
            color: transparent ? Colors.PrimaryText : Colors.SecondaryText,
            ...textStyle,
          }}>
          {text}
        </ResponsiveText>
      ))}
    <View style={[styles.rightStyle, rightIconStyle]}>{right}</View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  ButtonStyle: {
    height: wp('10%'),
    marginVertical: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7%',
    borderColor: Color.ButtonBackground,
    borderWidth: 1,
  },
  text: {
    color: Color.ButtonText,
  },
  leftStyle: {
    marginRight: 10,
  },
  rightStyle: {},
});

export default Button;
