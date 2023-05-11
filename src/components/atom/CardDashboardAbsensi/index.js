import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Cancel, Approve, Ajukan} from '../../../assets';
import moment from 'moment';

const CardDashboardAbsensi = ({
  title,
  masuk,
  keluar,
  status,
  sub_status,
  no,
  users,
  route,
  nik,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.imageContainer}>{no}</Text>
        <View style={{flexDirection: 'column', alignItems: 'stretch'}}>
          <Text style={styles.text}>{title}</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.lokasiOrange}>{status}</Text>
            <Text style={styles.ins}>IN </Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {moment(masuk).format('HH:mm')}
            </Text>
            <Text style={styles.outs}>OUT</Text>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>
              {moment(keluar).format('HH:mm')}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'stretch',
            position: 'absolute',
          }}>
          <Text
            style={{
              color: '#0B1A47',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 14,
              marginTop: 5,
              marginLeft: 288,
            }}>
            NIK: {nik}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardDashboardAbsensi;

const styles = StyleSheet.create({
  text: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: -5,
    marginLeft: 10,
    textTransform: 'capitalize',
  },
  lokasi: {
    color: '#C61E24',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    marginTop: -5,
    marginLeft: 10,
  },
  lokasiOrange: {
    color: 'darkorange',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,

    marginLeft: 10,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  ins: {
    color: 'green',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  outs: {
    color: 'red',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    fontWeight: 'bold',
    marginLeft: 10,
    marginRight: 5,
  },
  container: {
    borderRadius: 5,
    backgroundColor: '#F5F3F3',
    height: 55,
    width: '90%',
    marginHorizontal: 15,
    marginVertical: 5,
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: 30,
    height: 30,
    marginLeft: 15,
    marginTop: 10,
    color: 'black',
    fontSize: 14,
  },
});
