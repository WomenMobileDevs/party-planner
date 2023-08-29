import React from 'react';
import {View, Text} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const LocationSearch = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAhFmbSQDLmF0aTYSM9dTvPwdvWiHRuFcI',
        language: 'en',
      }}
      fetchDetails={true}
/>
    </View>
  );
};

export default LocationSearch;
