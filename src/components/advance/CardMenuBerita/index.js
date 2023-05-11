import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Slider} from '../../../assets';
import moment from 'moment';

const CardMenuBerita = ({
  navigation,
  route,
  id,
  gambar,
  judul,
  highlight,
  tanggal,
  berita,
  kategori,
}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: '23%'}}
      onPress={() =>
        navigation.navigate('DetailBeritaHome', {
          users: route.params.users,
          id: id,
          judul: judul,
          gambar: gambar,
          berita: berita,
          tanggal: tanggal,
          kategori: kategori,
        })
      }>
      <View style={styles.container}>
        <Image style={styles.imageBerita} source={{uri: gambar}} />
        <View style={{flexDirection: 'column', width: '100%'}}>
          <Text numberOfLines={2} style={styles.text}>
            {judul}
          </Text>
          <Text
            style={[
              styles.text,
              {
                fontSize: 12,
                marginTop: -5,
                flexWrap: 'wrap',
                paddingRight: 50,
              },
            ]}>
            {highlight}
          </Text>
          <Text style={[styles.text, {fontSize: 11}]}>
            {moment(tanggal).format('DD MMMM YYYY')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardMenuBerita;

const styles = StyleSheet.create({
  text: {
    color: '#000000',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginTop: -2,
    marginLeft: 20,
    marginRight: 10,
  },
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 100,
    width: '100%',
    marginVertical: 5,
    flexDirection: 'row',
    paddingTop: 13,
  },
  imageBerita: {
    width: 115,
    height: 80,
    resizeMode: 'contain',
    marginLeft: 10,
    borderRadius: 8,
  },
});
