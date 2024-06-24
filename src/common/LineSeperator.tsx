import React from 'react';
import {StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const LineSeperator: React.FC = () => (
  <View style={styles.contianer}>
    <View style={styles.gradient} />
  </View>
);

const styles = StyleSheet.create({
  view: {
    backgroundColor: 'rgba(232,232,232,1.0)',
    width: wp('100%'),
    height: 2,
    marginTop: 10,
    marginBottom: 1,
  },
  contianer: {
    marginVertical: wp('5%'),
  },
  gradient: {
    height: 15,
    width: wp('100%'),
  },
});

export default LineSeperator;
