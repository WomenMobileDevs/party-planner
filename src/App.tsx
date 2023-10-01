import React, {useEffect, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  NativeModules,
  Platform,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import Signup from './screens/Signup';
import Login from './screens/UserAccountScreens/Login';
import EventOrganizerRegister from './screens/EventOrganizer/Register';
import EventAttendeeRegister from './screens/EventAttendee/Register';
import Otpinput from './screens/OtpVerify/Otpinput';
import LocationSearch from './screens/LocationSearch/LocationSearch';
import HomeScreen from './screens/HomeScreen';
import UserTypeSelectionScreen from './screens/UserAccountScreens/UserType';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      NativeModules.SplashScreenModule.hide();
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <UserTypeSelectionScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
