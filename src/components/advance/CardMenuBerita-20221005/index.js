import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Slider} from '../../../assets';

const CardMenuBerita = ({navigation,route,id, gambar, judul, highlight, tanggal}) => {
  return (
    <TouchableOpacity
      style={{marginHorizontal: '15%'}}
      onPress={() => navigation.navigate('DetailBeritaPage', {
                  users: route.params.users,
                  id : id
                })
      }>
      <View style={styles.container}>
        <Image style={styles.imageBerita} source={{uri: gambar}} />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.text}>{judul}</Text>
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
          <Text style={[styles.text, {fontSize: 10}]}>{tanggal}</Text>
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
  },
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: 87,
    width: '85%',
    marginVertical: 5,
    flexDirection: 'row',
    paddingTop: 13,
  },
  imageBerita: {
    width: 95,
    height: 60,
    resizeMode: 'stretch',
    marginLeft: 10,
    borderRadius: 8,
  },
});
