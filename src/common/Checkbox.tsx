import React from 'react';
import {StyleSheet, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../config/color';
import ResponsiveText from './ResponsiveText';

type Props = {
  disabled?: boolean;
  value?: boolean;
  onValueChange?: () => void;
  text?: string;
};

const Checkbox: React.FC<Props> = ({disabled, value, onValueChange, text}) => (
  <View style={styles.bottomView}>
    <CheckBox disabled={disabled} value={value} onValueChange={onValueChange} />
    <ResponsiveText medium style={styles.agreeText} thin>
      {text}
    </ResponsiveText>
  </View>
);
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeText: {
    fontSize: 3.5,
    color: Colors.SecondaryText,
  },
  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginVertical: 5,
  },
});

export default Checkbox;
