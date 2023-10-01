import 'react-native-gesture-handler';
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
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const Stack = createStackNavigator();

  useEffect(() => {
    if (Platform.OS === 'android') {
      NativeModules.SplashScreenModule.hide();
    }
  }, []);

  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="UserTypeSelection" component={UserTypeSelectionScreen} />
      </Stack.Navigator>
    </NavigationContainer>

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
