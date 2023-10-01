import {Dimensions, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors/Colors';
const {height: windowHeight} = Dimensions.get('window');

export const OtpStyle = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

  container: {
    padding: 40,
    justifyContent: 'center',
    marginVertical: 170,
  },
  label: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 4,
  },
  textinput: {
    padding: 20,
    justifyContent: 'center',
    height: 30,
    width: 30,
    borderColor: COLORS.primary,
    borderWidth: 1,
    marginBottom: 10,
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
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 20,
  },
});
