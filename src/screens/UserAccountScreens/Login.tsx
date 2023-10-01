import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import {EventAttendees} from '../../dummy/loginCredentials';
import Otpinput from '../OtpVerify/Otpinput';

// Import your array of login credentials

const LoginScreen = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [validPhoneNumber, setValidPhoneNumber] = useState(true); // For phone number validation

  const handleRequestOtp = () => {
    // Validate the entered phone number format (e.g., 10 digits)
    if (/^\d{10}$/.test(mobileNumber)) {
      // Find the user based on the entered mobile number
      const user = EventAttendees.find(
        attendee => attendee.phone.toString() === mobileNumber,
      );

      if (user) {
        // Mobile number is valid; show OTP input
        setShowOtpInput(true);
        setValidPhoneNumber(true);
      } else {
        Alert.alert('Invalid mobile number. Please try again.');
        setValidPhoneNumber(false);
      }
    } else {
      Alert.alert('Please enter a valid 10-digit mobile number.');
      setValidPhoneNumber(false);
    }
  };

  const handleLogin = () => {
    // Find the user based on the entered mobile number
    const user = EventAttendees.find(
      attendee => attendee.phone.toString() === mobileNumber,
    );

    if (user && otp === user.otp.toString()) {
      // OTP is valid; navigate to the home screen
      Alert.alert('Login successful!'); // Replace with navigation code
    } else {
      Alert.alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={[styles.input, !validPhoneNumber && styles.inputError]}
        placeholder="Enter Mobile Number"
        value={mobileNumber}
        onChangeText={setMobileNumber}
        keyboardType="numeric"
        maxLength={10}
      />
      {!showOtpInput ? (
        <Button title="Request OTP" onPress={handleRequestOtp} />
      ) : (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter OTP"
            value={otp}
            onChangeText={setOtp}
            keyboardType="numeric"
            maxLength={4}
          />
          <Otpinput />
          <Button title="Login" onPress={handleLogin} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    width: '100%',
  },
  inputError: {
    borderColor: 'red', // Add error border color
  },
});

export default LoginScreen;
