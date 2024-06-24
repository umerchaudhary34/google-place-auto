/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  Modal,
  SafeAreaView,
  Platform,
  TouchableWithoutFeedback,
  View,
  StyleSheet,
} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {themeContext} from '../config/themeContext';

type Props = {
  visible: boolean;
  onRequestClose?: () => void;
  containerStyle?: any;
  backgroundStyle?: any;
  disabled?: boolean;
  children?: any;
  childrenStyle?: any;
  bottom?: boolean;
};

const AppModal: React.FC<Props> = props => {
  const theme = useContext(themeContext);
  const {
    containerStyle,
    backgroundStyle,
    visible,
    onRequestClose,
    disabled,
    bottom,
  } = props;
  return (
    <Modal transparent={true} visible={visible} onRequestClose={onRequestClose}>
      <SafeAreaView style={[styles.container, containerStyle]}>
        <TouchableWithoutFeedback disabled={disabled} onPress={onRequestClose}>
          <View
            style={[
              styles.bg,
              {backgroundColor: theme.modalBackground},
              backgroundStyle,
            ]}
          />
        </TouchableWithoutFeedback>
        <View
          style={{
            ...styles.content,
            ...{
              top: bottom ? undefined : Platform.OS === 'ios' ? 125 : 100,
              bottom: bottom ? 0 : undefined,
              width: bottom ? '100%' : undefined,
            },
          }}>
          {props.children}
        </View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 50,
  },
  content: {
    marginTop: wp('30%'),
    position: 'absolute',
    zIndex: 60,
  },
});
export default AppModal;
