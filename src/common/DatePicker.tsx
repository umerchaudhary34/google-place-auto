import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import RNDateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import Colors from '../config/color';
import ResponsiveText from './ResponsiveText';
import Icons from '../config/icons';

type Props = {
  left: string;
  zIndex: number;
};

const DatePicker: React.FC<Props> = props => {
  const [date, setDate] = useState<Date>(new Date());
  const [show, setShow] = useState<boolean>(false);

  const onChangeDate = (
    event: DateTimePickerEvent | undefined,
    selectedDate: Date,
  ) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const onTextPress = () => {
    setShow(!show);
  };
  return (
    <TouchableOpacity
      onPress={onTextPress}
      style={{...styles.container, ...{zIndex: props.zIndex}}}>
      <ResponsiveText bold style={styles.leftText}>
        {props.left}
      </ResponsiveText>
      <View style={styles.row}>
        <View style={styles.containerSt}>
          <ResponsiveText>{date.toDateString()}</ResponsiveText>
        </View>
        {show && (
          <RNDateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            onChange={(
              event: DateTimePickerEvent | undefined,
              selectedDate: Date,
            ): void => onChangeDate(event, selectedDate)}
          />
        )}
        {Icons.Down()}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: Colors.PrimaryText,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  containerSt: {
    zIndex: 1,
    paddingVertical: 5,
  },
  dropdown: {
    backgroundColor: Colors.InputBackground,
    borderWidth: 0,
    borderRadius: 5,
  },
  leftText: {
    position: 'absolute',
    top: -10,
    left: 10,
    zIndex: 2,
    backgroundColor: Colors.InputBackground,
    paddingHorizontal: 5,
  },
  leftTextStyle: {
    marginVertical: 5,
  },
});

export default DatePicker;
