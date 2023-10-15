import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect, useSelector} from 'react-redux';
import RegisterEA from './EventAttendee/Register';
import RegisterEO from './EventOrganizer/Register';

const UserForm = () => {
  const selectedUserType = useSelector(state => state.userType);
  console.log('UserForm', selectedUserType);

  return (
    <View>
      <Text>UserForm: {selectedUserType}</Text>
      <RegisterEO />
      <RegisterEA />
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({});
