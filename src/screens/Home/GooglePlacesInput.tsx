import React, {createRef, useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import AppHeader from '../../common/AppHeader';
import Icons from '../../config/icons';
import {themeContext} from '../../config/themeContext';

type Props = {
  selectedLocation: (location: any) => void;
  onLeftPress: () => void;
};

const GooglePlacesInput: React.FC<Props> = ({
  selectedLocation,
  onLeftPress,
}) => {
  const GooglePlacesRef = createRef();
  const theme = useContext(themeContext);

  return (
    <View style={styles.main}>
      <AppHeader
        left={Icons.Cross({tintColor: '#000'})}
        leftPress={onLeftPress}
      />
      <View style={styles.searchStyle}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          placeholderTextColor={theme.text}
          fetchDetails={true}
          ref={GooglePlacesRef}
          onPress={(data, details = null) => {
            console.log(data, details);
            const latitude = details?.geometry.location.lat;
            const longitude = details?.geometry.location.lng;
            console.log('Place Name: ', data.structured_formatting.main_text);

            console.log('Latitude:', latitude);
            console.log('Longitude:', longitude);
            selectedLocation({
              latitude,
              longitude,
              placeName: data.structured_formatting.main_text,
            });
            if (GooglePlacesRef.current) {
              GooglePlacesRef.current.setAddressText('');
              if (GooglePlacesRef.current.clearInput) {
                GooglePlacesRef.current.clearInput();
              }
            }
          }}
          query={{
            key: 'YOUR_API_KEY',
            language: 'en',
          }}
          onFail={error => console.error('errorr', error)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#EDF0F1',
  },
  searchStyle: {
    padding: 10,
  },
});

export default GooglePlacesInput;
