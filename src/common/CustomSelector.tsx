/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Colors from '../config/color';
import InputField from './InputField';
import ResponsiveText from './ResponsiveText';
import Icons from '../config/icons';

type Props = {
  itemList: any;
  onCancelPress: () => void;
  onDone: (item: any) => void;
};

const CustomSelector: React.FC<Props> = ({itemList, onCancelPress, onDone}) => {
  const [search, setSearch] = useState<string>('');
  const [selected, setSelected] = useState<any>(null);
  const [list, setList] = useState<any>([]);

  useEffect(() => {
    const newList = itemList.map((item: any) => ({...item, selected: false}));
    setList(newList);
  }, [itemList]);

  const onSelect = (_item: any, index: number) => {
    // change selected to true for the selected item
    const newList = list.map((listItem: any, i: number) => {
      if (i === index) {
        setSelected(listItem);
        return {...listItem, selected: true};
      } else {
        return {...listItem, selected: false};
      }
    });
    setList(newList);
  };

  const onChange = (text: string) => {
    setSearch(text);
    const newList = itemList.filter((item: any) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setList(newList);
  };

  const onDonePress = () => {
    onDone(selected);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.padding}>
        <InputField
          left="Search"
          value={search}
          onChangeText={(text: string) => onChange(text)}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.listContainer}>
          {list?.map((item: any, index: number) => (
            <TouchableOpacity
              onPress={() => onSelect(item, index)}
              key={index}
              style={styles.itemContainer}>
              <ResponsiveText>{item.name}</ResponsiveText>
              {item.selected && Icons.Down()}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity
          onPress={() => {
            setSelected(null);
            onCancelPress();
          }}
          style={[
            styles.bottomButtons,
            {borderRightWidth: 1, borderRightColor: Colors.Primary},
          ]}>
          <ResponsiveText>Cancel</ResponsiveText>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDonePress} style={styles.bottomButtons}>
          <ResponsiveText>Done</ResponsiveText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  padding: {
    padding: 15,
  },
  listContainer: {
    maxHeight: wp('70%'),
  },
  bottomButtons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderTopColor: Colors.PrimaryText,
    flexDirection: 'row',
  },
  mainContainer: {
    backgroundColor: Colors.InputBackground,
    flex: 1,
    width: wp('80%'),
    borderRadius: 10,
  },
  bottomText: {
    color: Colors.SecondaryText,
  },
  headerText: {
    fontSize: 6,
    textAlign: 'center',
  },
});

export default CustomSelector;
