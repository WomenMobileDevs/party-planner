import React from 'react';
import {Pressable, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const Button = ({text, onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8b008b',
    height: 50,
    marginVertical: 10,

    alignSelf: 'stretch',

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 5,
    borderBottomWidth: 5,
    borderColor: '#8b008b',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    borderColor: 'white',
  },
});

export default Button;
