import React from 'react';
import {StyleSheet, Text, View} from 'react-native';



const ButtonGrey = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default ButtonGrey;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a5a5a5',
    borderRadius: 6,
    width: 300,
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    /*fontFamily: 'Poppins-SemiBold',*/
    fontSize: 16,
    textAlign: 'center',
  },
});
