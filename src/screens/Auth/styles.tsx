import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors/Colors';
const {height: windowHeight} = Dimensions.get('window');

export const AuthViewStyle = StyleSheet.create({
  container: {
    padding: 30,
    height: windowHeight,
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 18,
    color: COLORS.primary,
  },
  subtitle: {
    textAlign: 'center',
    padding: 10,
    color: COLORS.primary,
  },
  inputContainer: {marginVertical: 40},
  phone_input: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 4,
    padding: 20,
    paddingVertical: 10,
    fontSize: 15,
  },

  button: {
    borderWidth: 0,
    borderRadius: 4,
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    padding: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
