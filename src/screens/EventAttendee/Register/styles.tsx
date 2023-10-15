import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../../constants/colors/Colors';
const {height: windowHeight} = Dimensions.get('window');

export const RegisterStyle = StyleSheet.create({
  container: {
    padding: 30,
    height: windowHeight,
    backgroundColor: '#f9f9f9',
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  input_container: {
    paddingVertical: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
    color: COLORS.primary,
  },
  form: {
    border: '2px solid black',
    padding: 10,
    borderRadius: 15,
  },
  paragraph: {
    margin: 5,
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
  },
  input: {
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
  button_container: {
    paddingTop: 20,
  },
});
