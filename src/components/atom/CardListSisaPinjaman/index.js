import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Cancel, Approve, Map, Info, Calendar} from '../../../assets';

const CardListSisaPinjaman = ({nomer, jenis, bulan, rp_tagihan,dataall,id_transaksi,sisa_angsurans,sisa_tagihan}) => {
  return (
    <View>
      <View style={styles.tipeAbsen}>
        <View
          style={{
            flexDirection: 'row',
            width: 385,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
            <Text style={styles.text}>{nomer}</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: 'green',
                fontWeight: '900',
                fontSize: 16,
                textAlign: 'left',
                paddingLeft: 25,
              }}>
              {jenis}
            </Text>
            <Text
              style={{
                color: 'darkorange',
                fontWeight: '800',
                fontSize: 16,
                textAlign: 'left',
                paddingLeft: 25,
              }}>
              ID Transaksi
            </Text>
             <Text
              style={{
                color: 'darkorange',
                fontWeight: '800',
                fontSize: 16,
                textAlign: 'left',
                paddingLeft: 25,
              }}>
              Sisa Angsuran
            </Text>
             <Text
              style={{
                color: 'darkorange',
                fontWeight: '800',
                fontSize: 16,
                textAlign: 'left',
                paddingLeft: 25,
              }}>
              Sisa Tagihan
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              marginLeft: 80,
              alignSelf: 'flex-end',
            }}>
            <Text
              style={{
                color: 'green',
                fontWeight: '800',
                fontSize: 16,
                textAlign: 'left',
                paddingLeft: 25,
              }}>
              {bulan}
            </Text>
            <Text
              style={{
                color: 'darkorange',
                fontWeight: '900',
                fontSize: 16,
                textAlign: 'left',
                paddingLeft: 25,
              }}>
              {id_transaksi}
            </Text>
            <Text
              style={{
                color: 'darkorange',
                fontWeight: '900',
                fontSize: 16,
                textAlign: 'left',
                paddingLeft: 25,
              }}>
              {sisa_angsurans}
            </Text>
            <Text
              style={{
                color: 'darkorange',
                fontWeight: '900',
                fontSize: 16,
                textAlign: 'left',
                paddingLeft: 25,
              }}>
              {sisa_tagihan}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardListSisaPinjaman;

const styles = StyleSheet.create({
  // text: {
  //   color: '#FFFF',
  //   fontWeight: 'bold',
  //   fontSize: 18,
  //   marginLeft: 10,
  //   paddingTop: 13,
  // },
  isi: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 15,
  },
  lokasi: {
    color: '#C61E24',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: -5,
    marginLeft: 10,
  },
  container: {
    borderRadius: 5,
    backgroundColor: 'lawngreen',
    height: 110,
    width: '90%',
    marginBottom: 20,
    padding: 20,
    marginTop: -5,
  },
  text: {
    fontWeight: '800',
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 25,
  },
  tipeAbsen: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 10,
  },
  imageContainer: {
    width: 35,
    height: 35,
    marginLeft: 15,
  },
});
