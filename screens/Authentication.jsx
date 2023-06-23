import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const Authentication = () => {
  const [phone_number, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = number => {
    const formatted_number = number.replace(/[^0-9]/g, '');
    if (number.length <= 10) {
      setPhoneNumber(formatted_number);
    }
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Verify your mobile number </Text>
        <Text style={styles.subtitle}>
          Enter your number so that we know you're you
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.phone_input}
          placeholder="Enter your mobile number"
          value={phone_number}
          onChangeText={handlePhoneNumberChange}
          keyboardType="phone-pad"
        />
      </View>
      <View tsyle={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log(phone_number);
          }}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    height: '100%',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#522446',
  },
  subtitle: {
    textAlign: 'center',
    padding: 10,
    color: '#522446',
  },
  inputContainer: {marginVertical: 40},
  phone_input: {
    borderWidth: 1,
    borderColor: '#522446',
    borderRadius: 4,
    padding: 20,
    paddingVertical: 10,
    fontSize: 15,
  },

  button: {
    borderWidth: 0,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: '#522446',
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Authentication;
