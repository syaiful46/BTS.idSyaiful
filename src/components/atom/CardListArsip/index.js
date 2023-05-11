import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {iconRp} from '../../../assets';

const CardListArsip = ({title, status, icons, message, date, warna}) => {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
        <Image
          source={icons}
          style={
            warna === 'biru' ? styles.imageContainerBiru : styles.imageContainer
          }
        />
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'flex-start',
            alignContent: 'flex-start',
          }}>
          <Text style={styles.text}>{title}</Text>
          <Text style={warna === 'biru' ? styles.isiBiru : styles.isi}>
            {message}
          </Text>
        </View>
        <View style={{flexDirection: 'column', alignSelf: 'stretch'}}>
          <Text style={styles.isi}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardListArsip;

const styles = StyleSheet.create({
  text: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: -5,
    fontWeight: 'bold',
  },
  isi: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#0B1A47',
  },
  isiBiru: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'blue',
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
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    width: 350,
    marginVertical: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    width: 30,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
  },
  imageContainerBiru: {
    width: 40,
    height: 40,
    marginLeft: 15,
    marginRight: 15,
  },
});
