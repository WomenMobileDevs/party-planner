import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {AuthViewStyle} from './styles';
import AUTH_LABELS from './auth_labels';
import STRINGS from '../../constants/strings/Strings';

const Authentication = () => {
  const [phone_number, setPhoneNumber] = useState('');
  const handlePhoneNumberChange = number => {
    const formatted_number = number.replace(/[^0-9]/g, '');
    if (number.length <= 10) {
      setPhoneNumber(formatted_number);
    }
  };
  return (
    <View style={AuthViewStyle.container}>
      <View>
        <Text style={AuthViewStyle.title}>{AUTH_LABELS.title} </Text>
        <Text style={AuthViewStyle.subtitle}>{AUTH_LABELS.subtitle}</Text>
      </View>

      <View style={AuthViewStyle.inputContainer}>
        <TextInput
          style={AuthViewStyle.phone_input}
          placeholder="Enter your mobile number"
          value={phone_number}
          onChangeText={handlePhoneNumberChange}
          keyboardType="phone-pad"
        />
      </View>
      <View style={AuthViewStyle.buttonContainer}>
        <TouchableOpacity
          style={AuthViewStyle.button}
          onPress={() => {
            console.log(phone_number);
          }}>
          <Text style={AuthViewStyle.buttonText}>{STRINGS.continue}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Authentication;
