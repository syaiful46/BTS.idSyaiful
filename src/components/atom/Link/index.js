import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Link = ({title}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Link;

const styles = StyleSheet.create({
  text: {
    color: '#0B1A47',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
});
