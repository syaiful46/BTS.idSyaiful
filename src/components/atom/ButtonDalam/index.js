import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ButtonDalam = ({title, users}) => {
  return (
    <View
      style={
        users === 'korsn' || users === 'usersn' || users === 'kdc'
          ? styles.containerOrange
          : styles.container
      }>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ButtonDalam;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderRadius: 6,
    width: 165,
    paddingVertical: 10,
  },
  containerOrange: {
    backgroundColor: 'darkorange',
    borderRadius: 6,
    width: 165,
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    /*fontFamily: 'Poppins-SemiBold',*/
    fontSize: 16,
    textAlign: 'center',
  },
});
