import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Cancel, Approve, Map, Info, Calendar} from '../../../assets';

const CardListTagihan = ({nomer, jenis, bulan, rp_tagihan, dataall}) => {
  return (
    <View>
      <View style={styles.tipeAbsen}>
        <View
          style={{
            flexDirection: 'row',
            width: 375,

            paddingHorizontal: 10,
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'column', alignSelf: 'flex-start'}}>
            <Text style={styles.text}>{nomer}</Text>
          </View>
          <View
            style={{flexDirection: 'column', position: 'absolute', left: 60}}>
            <Text
              style={{
                color: 'green',
                fontWeight: '900',
                fontSize: 16,
                textAlign: 'left',
              }}>
              {jenis}
            </Text>
            <Text
              style={{
                color: 'darkorange',
                fontWeight: '800',
                fontSize: 16,
                textAlign: 'left',
              }}>
              Jumlah Tagihan
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'column',
              alignSelf: 'stretch',

              right: 15,
            }}>
            <Text
              style={{
                color: 'green',
                fontWeight: '800',
                fontSize: 16,
              }}>
              {bulan}
            </Text>
            <Text
              style={{
                color: 'darkorange',
                fontWeight: '900',
                fontSize: 16,
              }}>
              {rp_tagihan}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardListTagihan;

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
    color: '#0B1A47',
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
