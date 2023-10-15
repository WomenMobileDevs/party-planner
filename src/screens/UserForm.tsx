import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {connect, useSelector} from 'react-redux';

const UserForm = () => {
  const selectedUserType = useSelector(state => state.userType);

  return (
    <View>
      <Text>UserForm: {selectedUserType}</Text>
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({});
