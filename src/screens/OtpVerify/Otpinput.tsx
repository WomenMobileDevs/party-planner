import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import STRINGS from '../../constants/strings/Strings';
import { OtpStyle } from './styles';
import COLORS from '../../constants/colors/Colors';
const DATA = [0, 0, 0, 0];

const Otpinput = () => {
  return (
    <View style={OtpStyle.container}>
      <FlatList
        columnWrapperStyle={{justifyContent:"space-evenly"}}
        numColumns={4}
        data={DATA}
        renderItem={() => (
          <TextInput
           style={OtpStyle.textinput}
          />
        )}
      />
      <View style={OtpStyle.button_container}>
      <TouchableOpacity style={OtpStyle.button}>
        <Text style={OtpStyle.buttonText}>{STRINGS.proceed}</Text>
      </TouchableOpacity>
    </View>

    </View>
  );
};



export default Otpinput;