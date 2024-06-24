/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {Platform, StyleSheet, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../config/color';
import {themeContext} from '../config/themeContext';
import ResponsiveText from './ResponsiveText';

type Props = {
  title?: string;
  left?: any;
  leftPress?: () => void;
  right?: any;
  rightPress?: () => void;
  rightSearch?: any;
  rightSearchPress?: () => void;
  rightMenu?: any;
  rightMenuPress?: () => void;
  containerStyle?: any;
  leftStyle?: any;
  bodyStyle?: any;
  rightStyle?: any;
  rightSearchStyle?: any;
  underline?: boolean;
  background?: boolean;
  body?: any;
  leftText?: string;
  leftTextStyle?: any;
  normal?: boolean;
};

const AppHeader: React.FC<Props> = ({
  title,
  left,
  leftPress,
  right,
  rightPress,
  rightSearch,
  rightSearchPress,
  rightMenu,
  rightMenuPress,
  containerStyle,
  leftStyle,
  bodyStyle,
  rightStyle,
  rightSearchStyle,
  underline,
  background,
  body,
  leftText,
  leftTextStyle,
  normal,
}) => {
  const theme = useContext(themeContext);
  return (
    <View
      style={[
        styles.customStyle,
        containerStyle,
        {
          borderBottomColor: Colors.Underline,
          borderBottomWidth: underline ? 1 : 0,
          backgroundColor: background ? Colors.Primary : 'transparent',
        },
      ]}>
      <View style={[styles.left, leftStyle]}>
        {leftText ? (
          <ResponsiveText font={6} style={leftTextStyle}>
            {leftText}
          </ResponsiveText>
        ) : (
          left && (
            <TouchableOpacity style={styles.leftIcon} onPress={leftPress}>
              {left}
            </TouchableOpacity>
          )
        )}
      </View>
      <View style={[styles.body, bodyStyle]}>
        {body ? (
          body
        ) : (
          <ResponsiveText
            font={normal ? 5 : 6}
            style={{
              color: theme.text,
              fontWeight: normal ? 'bold' : 'normal',
            }}>
            {title}
          </ResponsiveText>
        )}
      </View>
      {!rightSearch && (
        <TouchableOpacity
          onPress={rightPress}
          style={[styles.right, rightStyle]}>
          {right}
        </TouchableOpacity>
      )}
      {rightSearch && (
        <View style={styles.rightSearch}>
          <TouchableOpacity
            onPress={rightSearchPress}
            style={[styles.rightSearchIcon, rightSearchStyle]}>
            {rightSearch}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={rightMenuPress}
            style={[styles.rightSearchIcon, rightStyle]}>
            {rightMenu}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  customStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    height: wp(Platform.OS === 'ios' ? '10%' : '15%'),
  },
  leftIcon: {
    padding: 10,
  },
  left: {
    flex: 1,
  },
  rightText: {
    fontSize: 3,
  },
  rightSearch: {
    flexDirection: 'row',
  },
  body: {
    flex: 1,
    alignItems: 'center',
  },
  rightSearchIcon: {
    marginHorizontal: 5,
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1,
    right: 10,
  },
  bodyStyle: {
    fontSize: '5%',
    color: Colors.SecondaryText,
    alignItems: 'center',
  },
});
export default AppHeader;
