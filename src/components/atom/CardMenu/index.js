import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {CardIcon} from '../../../components';

const CardMenu = ({title, warna}) => {
  return (
    <View style={styles.container}>
      <CardIcon warna={warna} title={title} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default CardMenu;

const styles = StyleSheet.create({
  text: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: 15,
    marginLeft: 20,
  },
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 80,
    width: '80%',
    elevation: 5,
    marginVertical: 10,
    flexDirection: 'row',
    paddingTop: 10,
  },
});
