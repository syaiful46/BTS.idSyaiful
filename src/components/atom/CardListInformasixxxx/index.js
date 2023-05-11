import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Cancel, Approve, Map, Info, Calendar} from '../../../assets';

const CardListInformasixxxx = ({title, icons, message}) => {
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
        }}>
        <View
          style={{
            flexDirection: 'column',
            marginRight: 15,
            marginLeft: -20,
            marginTop: 20,
          }}>
          <Image
            source={icons == 'Informasi' ? Map : Info}
            style={styles.imageContainer}
          />
        </View>
        <View
          style={{
            flexDirection: 'column',
            marginHorizontal: 10,
          }}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.isi}>{message}</Text>
        </View>
      </View>
    </View>
  );
};

export default CardListInformasixxxx;

const styles = StyleSheet.create({
  text: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 10,
    paddingTop: 13,
  },
  isi: {
    color: '#FFFF',
    fontSize: 13,
    textAlign: 'left',
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
  imageContainer: {
    width: 35,
    height: 35,
    marginLeft: 15,
  },
});
