import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Cancel, Approve, Map, Info, Speaker, Calendar} from '../../../assets';

const BannerHome = ({title, icons, message}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          marginHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginRight: 25,
            marginLeft: -20,
          }}>
          <Text style={styles.text}>{title}</Text>
          <Image
            source={icons == 'Informasi' ? Map : Speaker}
            style={styles.imageContainer}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginLeft: 40,
            width: 250,
            alignSelf: 'stretch',
            position: 'absolute',
          }}>
          <Text numberOfLines={2} style={styles.isi}>
            {message}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BannerHome;

const styles = StyleSheet.create({
  text: {
    color: '#FFFF',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 10,
    marginBottom: 10,
  },
  isi: {
    color: '#FFFF',
    fontWeight: '500',
    fontSize: 14,
    marginTop: 40,
    textAlign: 'left',
    marginLeft: 15,
  },
  lokasi: {
    color: '#C61E24',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    marginTop: -5,
    marginLeft: 10,
  },
  container: {
    borderRadius: 25,
    backgroundColor: 'blue',
    height: 120,
    width: 350,
    marginBottom: 20,
    padding: 20,
    marginTop: -5,
  },
  imageContainer: {
    width: 45,
    height: 40,
    marginLeft: 15,
  },
});
