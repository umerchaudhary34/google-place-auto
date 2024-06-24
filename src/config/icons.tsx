import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import back from '../assets/icons/back.png';

const Icons: any = {
  Back: (style: any) => (
    <Image source={back} style={{...styles.defaultStyle, ...style}} />
  ),
  Cross: (style: any) => (
    <Image source={back} style={{...styles.defaultStyle, ...style}} />
  ),
};

const styles = StyleSheet.create({
  defaultStyle: {
    height: wp('5%'),
    width: wp('5%'),
    resizeMode: 'contain',
  },
  smallStyle: {
    height: wp('4%'),
    width: wp('4%'),
    resizeMode: 'contain',
  },
});

export default Icons;
