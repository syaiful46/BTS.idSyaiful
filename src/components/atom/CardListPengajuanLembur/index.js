import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Cancel, Approve} from '../../../assets';

const CardListPengajuanLembur = ({jam, title, status, icons}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={icons == 'Approve' ? Approve : Cancel}
          style={styles.imageContainer}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.jam}>{jam}</Text>
          <Text style={styles.lokasi}>{status}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardListPengajuanLembur;

const styles = StyleSheet.create({
  text: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: -5,
    marginLeft: 10,
  },
  lokasi: {
    color: '#000000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: -5,
    marginLeft: 10,
  },
  jam: {
    color: '#C61E24',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: -5,
    marginLeft: 10,
  },
  container: {
    borderRadius: 5,
    backgroundColor: '#F5F3F3',
    height: 70,
    width: '90%',
    marginVertical: 5,
    paddingTop: 10,
  },
  imageContainer: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginTop: 10,
  },
});
