import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Circle = ({users}) => {
  return (
    <View
      style={
        users === 'korsn' || users === 'usersn'
          ? styles.containerOrange
          : styles.container
      }>
      <View
        style={
          users === 'korsn' || users === 'usersn'
            ? styles.dalamOrange
            : styles.dalam
        }
      />
    </View>
  );
};

export default Circle;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderColor: '#C61E24',
    borderRadius: 20,
    width: 18,
    height: 18,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 3,
  },
  dalam: {
    backgroundColor: '#C61E24',
    borderRadius: 50,
    width: 10,
    height: 10,
  },
  containerOrange: {
    backgroundColor: 'white',
    borderColor: '#F1B355',
    borderRadius: 20,
    width: 18,
    height: 18,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 3,
  },
  dalamOrange: {
    backgroundColor: '#F1B355',
    borderRadius: 50,
    width: 10,
    height: 10,
  },
});
