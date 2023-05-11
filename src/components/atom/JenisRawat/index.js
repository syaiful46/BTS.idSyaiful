import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const JenisRawat = ({title, active}) => {
  return (
    <View style={active === 'yes' ? styles.container : styles.containerNot}>
      <View style={active === 'yes' ? styles.bulat : styles.bulatNot} />
      <Text style={active === 'yes' ? styles.title : styles.titleNot}>
        {title}
      </Text>
    </View>
  );
};

export default JenisRawat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#C71E25',
    borderRadius: 6,
    height: 40,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
  },
  containerNot: {
    backgroundColor: '#FDEFEF',
    borderRadius: 6,
    height: 40,
    marginHorizontal: 20,
    marginTop: 10,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 11,
    marginTop: 10,
  },
  titleNot: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    textAlign: 'center',
    marginLeft: 11,
    marginTop: 10,
  },

  bulat: {
    height: 25,
    width: 25,
    borderRadius: 100,
    backgroundColor: 'white',
    marginLeft: 13,
    marginTop: 8,
  },
  bulatNot: {
    height: 25,
    width: 25,
    borderRadius: 100,
    backgroundColor: '#C4C4C4',
    marginLeft: 13,
    marginTop: 8,
  },
});
