import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Slider} from '../../../assets';
import moment from 'moment';

const CardBerita = ({
  route,
  navigation,
  users,
  id,
  gambar,
  judul,
  highlight,
  berita,
  tanggal,
  endtanggal,
  kategori,
}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetailBeritaPage', {
            users: route.params.users,
            id: id,
            judul: judul,
            gambar: gambar,
            berita: berita,
            tanggal: tanggal,
            kategori: kategori,
            endtanggal: endtanggal,
          })
        }>
        <Image style={styles.imageContainer} source={{uri: gambar}} />
        <Text style={styles.tanggal}>
          {moment(tanggal).format('DD MMMM YYYY')}
        </Text>
        <View
          style={
            users === 'usersn' || users === 'korsn' || users === 'kdc'
              ? styles.kotakOrange
              : styles.kotakMerah
          }>
          <Text style={[styles.tanggal, {color: 'white'}]}>
            {kategori === 0
              ? 'Tips'
              : kategori === 1
              ? 'Info Lowongan Kerja'
              : 'Informasi Kegiatan Internal'}
          </Text>
        </View>
        <Text style={styles.judul}>{judul}</Text>

        <Text style={styles.subTitle}>
          {berita.replace(/(<([^>]+)>)/gi, '').substr(0, 100) + ' ...'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardBerita;

const styles = StyleSheet.create({
  imageContainer: {
    marginBottom: 15,
    marginTop: 35,
    borderRadius: 10,
    width: '100%',
    height: 160,
  },
  tanggal: {
    color: '#FA8501',
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
  },
  judul: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    color: '#0B1A47',
    fontSize: 14,
    marginTop: 10,
  },
  kotakMerah: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#C61E24',
    height: 30,
    width: 200,
  },
  kotakOrange: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#F1B355',
    height: 30,
    width: 200,
  },
});
