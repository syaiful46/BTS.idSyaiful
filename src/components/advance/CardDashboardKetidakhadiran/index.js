import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const CardDashboardKetidakhadiran = ({title, users}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
        <Text style={styles.text}>Yon Parjiyo</Text>
        <Text style={[styles.text, {fontSize: 16}]}>NIK : 123456</Text>
        <Text
          style={
            users === 'korsn' || users === 'usersn'
              ? styles.textsakitorange
              : styles.textsakit
          }>
          SAKIT
        </Text>
      </View>
      <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
        <Text style={styles.textKecil}>Senin</Text>
        <Text style={styles.textKecil}>13 April 2022</Text>
        <Text style={styles.textKecil}>3 Hari</Text>
      </View>
    </View>
  );
};

export default CardDashboardKetidakhadiran;

const styles = StyleSheet.create({
  text: {
    color: '#0B1A47',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    marginTop: -5,
    marginLeft: 15,
  },
  textsakit: {
    color: 'red',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginTop: -5,
    marginLeft: 15,
  },
  textsakitorange: {
    color: 'darkorange',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginTop: -5,
    marginLeft: 15,
  },
  textKecil: {
    color: '#0B1A47',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginTop: -5,
    marginRight: 15,
  },
  container: {
    borderRadius: 5,
    backgroundColor: '#FDEFEF',
    height: 95,
    width: '90%',
    marginVertical: 5,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
