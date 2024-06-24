/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  View,
  Platform,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../config/color';
import Icons from '../config/icons';
import ResponsiveText from './ResponsiveText';

type Props = {
  left?: string;
  leftTextStyle?: any;
  textLeft?: any;
  subLeft?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  inputContainer?: any;
  containerStyle?: any;
  borderBottomColor?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  secureTextEntry?: boolean;
  keyboardType?: any;
  editable?: boolean;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  returnKeyType?: any;
  onSubmitEditing?: () => void;
  right?: any;
  rightIcon?: any;
  rightStyle?: any;
  leftIcon?: any;
  leftStyle?: any;
  onLeftPress?: () => void;
  inputField?: any;
  placeholderTextColor?: string;
  search?: any;
  onSubmit?: () => void;
  bottomLeft?: string;
  onForgetPress?: () => void;
  bottomLeftStyles?: any;
};

const PasswordField: React.FC<Props> = props => {
  const [passwordShow, setPasswordShow] = useState<boolean>(false);
  const [borderBottomColor] = useState<string>(
    props.borderBottomColor ? props.borderBottomColor : Colors.PrimaryText,
  );

  const onFocus = (): void => {
    if (props.onFocus) {
      props.onFocus();
    }
  };

  const onBlur = (): void => {
    if (props.onBlur) {
      props.onBlur();
    }
  };

  const onRightPress = () => {
    setPasswordShow(!passwordShow);
  };

  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.subLeft && (
        <View>
          <ResponsiveText style={styles.subLeftText}>
            {props.subLeft}
          </ResponsiveText>
        </View>
      )}
      <View
        style={[
          styles.inputStyles,
          {
            borderBottomColor: borderBottomColor,
          },
          props.inputContainer,
        ]}>
        {props.left && (
          <View style={[props.leftTextStyle, styles.leftTextStyle]}>
            <ResponsiveText bold style={[styles.leftText, props.textLeft]}>
              {props.left}
            </ResponsiveText>
          </View>
        )}
        {props.leftIcon && (
          <View style={[props.leftStyle, styles.leftStyle]}>
            {props.leftIcon}
          </View>
        )}
        <TextInput
          onChangeText={props.onChangeText}
          style={{
            ...styles.inputField,
            ...props.inputField,
            borderBottomColor: borderBottomColor,
          }}
          placeholder={props.placeholder}
          underlineColorAndroid={'transparent'}
          placeholderTextColor={
            props.placeholderTextColor
              ? props.placeholderTextColor
              : Colors.InputColor
          }
          value={props.value}
          keyboardType={props.keyboardType ? props.keyboardType : 'default'}
          secureTextEntry={passwordShow ? false : true}
          multiline={props.multiline}
          numberOfLines={props.numberOfLines ? 5 : 1}
          onBlur={onBlur.bind(this)}
          onFocus={onFocus.bind(this)}
          editable={props.editable}
          returnKeyType={props.search}
          onSubmitEditing={props.onSubmit}
          maxLength={props.maxLength}
        />

        <TouchableOpacity
          onPress={onRightPress}
          style={[props.rightStyle, styles.rightStyle]}>
          {!passwordShow ? Icons.View({}) : Icons.Hidden({})}
        </TouchableOpacity>
      </View>
      {props.bottomLeft && (
        <TouchableOpacity
          onPress={props.onForgetPress}
          style={[props.bottomLeftStyles, styles.bottomLeftStyles]}>
          <ResponsiveText
            style={{
              color: Colors.Primary,
              paddingVertical: 5,
            }}>
            {props.bottomLeft}
          </ResponsiveText>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  bottomLeftStyles: {},
  leftStyle: {
    marginLeft: 10,
  },
  inputStyles: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'ios' ? 5 : 1,
    borderRadius: wp('10%'),
    backgroundColor: Colors.InputBackground,
    borderWidth: 1,
    borderColor: Colors.PrimaryText,
    position: 'relative',
  },
  inputField: {
    flex: 1,
    width: '100%',
    fontSize: wp('3%'),
    color: Colors.SecondaryText,
    paddingLeft: 15,
    maxHeight: 100,
  },
  inputLabel: {
    color: '#969696',
    fontSize: wp('20%'),
  },
  rightStyle: {
    marginRight: 10,
  },
  leftTextStyle: {
    color: 'black',
    // marginVertical: 5,
    position: 'absolute',
    top: -12,
    left: 10,
    paddingHorizontal: 5,
    backgroundColor: Colors.InputBackground,
  },
  leftText: {
    color: Colors.black,
    fontWeight: '400',
    fontSize: wp('1.1%'),
  },
  subLeftText: {
    color: '#6D6D6D',
    fontSize: wp('0.8%'),
    marginLeft: 10,
  },
});

export default PasswordField;
