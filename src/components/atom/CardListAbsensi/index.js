import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Logout} from '../../../assets';

const CardListAbsensi = ({
  title,
  ins,
  insValue,
  outsValue,
  outs,
  lokasi,
  navigations,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.styleRows}>
        <View>
          <Text style={styles.text}>{title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.ins}>{ins}</Text>
            <Text style={styles.insValue}>{insValue}</Text>
            <Text style={styles.ins}>{outs}</Text>
            <Text style={styles.insValue}>{outsValue}</Text>
          </View>
          <Text style={styles.lokasi}>{lokasi}</Text>
        </View>
        <TouchableOpacity
          style={styles.touchStyle}
          onPress={() => navigations.navigate('Checkout')}>
          <Image source={Logout} style={styles.imageContainer} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardListAbsensi;

const styles = StyleSheet.create({
  text: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: -5,
    marginLeft: 10,
  },
  lokasi: {
    color: '#C61E24',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: -5,
    marginLeft: 10,
  },
  ins: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: -5,
    marginLeft: 10,
  },
  insValue: {
    color: '#0B1A47',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: -5,
    marginLeft: 10,
  },
  container: {
    borderRadius: 5,
    backgroundColor: '#F5F3F3',
    height: 75,
    width: '90%',
    marginVertical: 5,
    paddingTop: 10,
  },
  styleRows: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 30,
    height: 30,
    marginTop: 15,
  },
  touchStyle: {
    position: 'absolute',
    right: 10,
  },
});
