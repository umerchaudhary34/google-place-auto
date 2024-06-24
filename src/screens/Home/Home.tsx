import React, {useCallback, useEffect, useState} from 'react';
import {
  BackHandler,
  Image,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import Container from '../../common/Container';
import {useFocusEffect} from '@react-navigation/native';
import MapView, {
  Marker,
  PROVIDER_GOOGLE,
  PermissionsAndroid,
} from 'react-native-maps';
import GooglePlacesInput from './GooglePlacesInput';
import ResponsiveText from '../../common/ResponsiveText';
import Colors from '../../config/color';
import Geolocation from 'react-native-geolocation-service';
import {useDispatch, useSelector} from 'react-redux';
import {targetAction} from '../../store/locationActions';
import {RootState} from '../../store/store';

const PlaceIcon = require('../../assets/icons/place.png');

interface iTarget {
  latlng: {
    latitude: number;
    longitude: number;
  };
  title: string;
  description: string;
}

const Home: React.FC<Props> = () => {
  const dispatch = useDispatch();

  const targetedData = useSelector(
    (state: RootState) => state.targetedData.locations,
  );

  const [initialRegion, setInitialRegion] = useState<any>(null);
  const [selectedPlace, setSelectedPlace] = useState<boolean>(true);

  const [targetedLocations, setTargetedLocations] = useState<Array<iTarget>>(
    [],
  );

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => true; // Return true to prevent default back behavior
      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  useEffect(() => {
    if (targetedData.length > 0) {
      setTargetedLocations(targetedData);
    }
  }, [targetedData]);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'android') {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
      }
    })();

    Geolocation.getCurrentPosition(
      position => {
        const cLatitude: number = position.coords.latitude;
        const cLongitude: number = position.coords.longitude;

        setInitialRegion({
          latitude: cLatitude,
          longitude: cLongitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      error => {
        console.error(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  }, []);

  const selectedLocation = async (location: any) => {
    await dispatch(
      targetAction({
        latlng: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
        title: location.placeName,
        description: 'Description',
      }),
    );
    setSelectedPlace(true);
  };

  const onMenuPress = () => {
    setSelectedPlace(false);
  };
  return (
    <Container>
      <View style={styles.mapView}>
        {selectedPlace ? (
          <>
            <TouchableOpacity style={styles.menuStyle} onPress={onMenuPress}>
              <ResponsiveText style={styles.headerText}>
                Search Places
              </ResponsiveText>
            </TouchableOpacity>
            <MapView
              initialRegion={initialRegion}
              provider={PROVIDER_GOOGLE}
              style={styles.map}
              showsUserLocation={true}>
              {targetedLocations?.map((marker, index) => (
                <Marker
                  key={index}
                  coordinate={marker.latlng}
                  title={marker.title}
                  description={marker.description}>
                  <Image source={PlaceIcon} style={styles.iconStyle} />
                </Marker>
              ))}
            </MapView>
          </>
        ) : (
          <GooglePlacesInput
            onLeftPress={() => setSelectedPlace(true)}
            selectedLocation={selectedLocation}
          />
        )}
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  headerText: {
    color: Colors.SecondaryText,
  },
  iconStyle: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  menuStyle: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    borderColor: 'lightgrey',
    flex: 1,
  },
  mapView: {
    flex: 1,
    position: 'relative',
  },
  map: {
    flex: 1,
  },
});

export default Home;
