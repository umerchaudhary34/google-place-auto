import React from 'react';
import {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Colors from '../config/color';
import ResponsiveText from './ResponsiveText';

type Props = {
  left: string;
  placeholder: string;
  items: any;
  zIndex: number;
};

const Dropdown: React.FC<Props> = props => {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<any>(null);
  const [items, setItems] = useState<any>(props.items);

  return (
    <View style={{...styles.container, ...{zIndex: props.zIndex}}}>
      <ResponsiveText bold style={styles.leftText}>
        {props.left}
      </ResponsiveText>
      <DropDownPicker
        placeholder={props.placeholder}
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        textStyle={{
          color: Colors.Placeholder,
        }}
        maxHeight={200}
        autoScroll={true}
        listMode="SCROLLVIEW"
        containerStyle={styles.containerSt}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    position: 'relative',
    borderWidth: 1,
    borderColor: Colors.PrimaryText,
    borderRadius: 5,
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

export default Dropdown;
