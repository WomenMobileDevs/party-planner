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
import LoginScreen from './screens/UserAccountScreens/Login';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import EventPlannerHomeScreen from './screens/EventPlannerHomeScreen';
import EventGoerHomeScreen from './screens/EventGoerHomeScreen';

const App = () => {
  const Stack = createStackNavigator();

  useEffect(() => {
    if (Platform.OS === 'android') {
      NativeModules.SplashScreenModule.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserTypeSelection"
          component={UserTypeSelectionScreen}
        />
        <Stack.Screen
          name="EventGoerHomeScreen"
          component={EventGoerHomeScreen}
        />

        <Stack.Screen
          name="EventPlannerHomeScreen"
          component={EventPlannerHomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// <SafeAreaView style={styles.container}>
//   <LoginScreen />
// </SafeAreaView>

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
