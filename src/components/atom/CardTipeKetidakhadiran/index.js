import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const CardTipeKetidakhadiran = ({presentase, mptotal, hadir}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 15,
          flexWrap: 'wrap',
          textAlign: 'left',
          fontWeight: 'bold',
          color: '#FFFF',
        }}>
        All
      </Text>
      <Text style={{fontSize: 15, color: '#FFFF'}}>Total MP :{mptotal}</Text>
      <Text style={{fontSize: 15, color: '#FFFF'}}>Hadir :{hadir}</Text>
      <Text style={styles.text}>{presentase}</Text>
    </View>
  );
};

export default CardTipeKetidakhadiran;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: '#0050d7',
    height: 105,
    width: 120,
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 10,
  },
  containerNot: {
    borderRadius: 6,
    backgroundColor: '#B7B7B8',
    height: 90,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
  },
  text: {
    color: '#FFFFFF',
    /* fontFamily: 'Poppins-SemiBold', */
    fontSize: 15,
    flexWrap: 'wrap',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textNot: {
    color: '#585656',
    /* fontFamily: 'Poppins-SemiBold', */
    fontSize: 14,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});
