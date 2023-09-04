import {Dimensions, StatusBar, StyleSheet} from 'react-native';
import COLORS from '../../constants/colors/Colors'
const {height: windowHeight} = Dimensions.get('window');

export const HomeScreenStyles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    //   justifyContent:"center"
    },
    item: {
      backgroundColor: COLORS.primary,
      borderRadius:20,
      padding: 20,
      height:150,
      width:"45%",
      margin:5,
    //   justifyContent:"center"
    //   alignItems:"center"
    //   alignSelf:"center",
    //   marginVertical: 8,
    //   marginHorizontal: 16,
    },
    // title: {
    //   fontSize: 32,
    //   color:"#ffffff"
    // },
    text:{
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        color:"#000000",
    },
    title: {
        textAlign: 'center',
        fontSize: 24,
        color:"#ffffff",
        paddingTop:25
      },
      eventOrganisersp:{
        backgroundColor: COLORS.primary,
      borderRadius:20,
      padding: 20,
      height:150,
      width:"95%",
      margin:5,
      }

  });