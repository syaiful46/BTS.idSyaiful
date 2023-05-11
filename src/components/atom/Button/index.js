import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Button = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E57C37',
    borderRadius: 6,
    width: 140,
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
});
