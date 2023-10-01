import React from 'react';
import {SafeAreaView, Text, Alert} from 'react-native';
import Button from '../components/Button';

const Login = () => {
  return (
    <SafeAreaView>
      <Text>Wanna login as...</Text>
      <Button
        text="Party People"
        onPress={() => Alert.alert('party people button clicked')}
      />
      <Button
        text="Event Organiser"
        onPress={() => Alert.alert('event organizer button clicked')}
      />
    </SafeAreaView>
  );
};

export default Login;
