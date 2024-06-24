import React from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Color from '../config/color';
import Fonts from '../config/fonts';

type Props = {
  style?: any;
  bold?: boolean;
  medium?: boolean;
  semibold?: boolean;
  children?: any;
  subText?: boolean;
  numberOfLines?: number;
  font?: number;
};

const ResponsiveText: React.FC<Props> = props => {
  const { style, bold, medium, semibold, children, subText, font } = props;
  let fontSize = font ? wp(font) : subText ? wp('3%') : wp('4%');

  if (style?.fontSize) {
    fontSize = wp(style.fontSize);
  }

  const numberOfLines = props.numberOfLines ? props.numberOfLines : 0;

  return (
    <Text
      numberOfLines={numberOfLines}
      style={{
        ...styles.text,
        ...props.style,
        ...{
          fontSize,
          fontWeight: bold
            ? 'bold'
            : medium
              ? '500'
              : semibold
                ? '600'
                : 'normal',
        },
      }}>
      {children}
    </Text>
  );
};

const styles = {
  text: {
    color: Color.PrimaryText,
  },
};

export default ResponsiveText;
