import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';
import {Cancel, Approve, Ajukan, ApproveKor, CancelKor} from '../../../assets';
import moment from 'moment';
var width = Dimensions.get('window').width;

const CardListApproval = ({
  title,
  tanggal,
  endtanggal,
  status,
  sub_status,
  icons,
  users,
  route,
  jenis,
}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={
            icons == 0
              ? Ajukan
              : icons == 1
              ? ApproveKor
              : icons == 2
              ? CancelKor
              : icons == 3
              ? Approve
              : Cancel
          }
          style={styles.imageContainer}
        />
        <View style={{flexDirection: 'column', alignItems: 'stretch'}}>
          <Text style={styles.text}>{title}</Text>
          <Text
            style={
              users === 'korsn' || users === 'kdc'
                ? styles.lokasiOrange
                : styles.lokasi
            }>
            {status}
          </Text>
          {jenis === 'driver' ? (
            <Text style={styles.ins}>
              {moment(tanggal).format('DD MMMM YYYY')}
            </Text>
          ) : (
            <Text style={styles.ins}>
              {moment(tanggal).format('DD MMMM YYYY')} -{' '}
              {moment(endtanggal).format('DD MMMM YYYY')}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default CardListApproval;

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
    fontSize: 15,
    marginTop: -5,
    marginLeft: 10,
  },
  lokasiOrange: {
    color: 'darkorange',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
    marginTop: -5,
    marginLeft: 10,
  },
  ins: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: -2,
    marginLeft: 10,
  },
  container: {
    borderRadius: 5,
    backgroundColor: '#F5F3F3',
    height: 75,
    width: width - 40,
    marginHorizontal: 20,
    marginVertical: 5,
    paddingVertical: 5,
  },
  imageContainer: {
    width: 35,
    height: 35,
    marginLeft: 15,
    marginTop: 10,
  },
});
