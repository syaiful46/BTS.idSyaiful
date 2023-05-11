import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Cancel, Approve} from '../../../assets';

const CardListMailPage = ({
  navigations,
  id,
  title,
  status,
  icons,
  message,
  date,
}) => {
  const xxx = title.substr(0, 1);
  //console.log(title+" judulnya")

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          navigations.navigate('MailPageDetail', {
            id: id,
            title: title,
            icons: icons,
            message: message,
          })
        }>
        <View style={{flexDirection: 'row'}}>
          <View style={({flexDirection: 'column'}, styles.lingkar)}>
            <Text style={styles.textx}>{xxx}</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.isi}>{date}</Text>
            <Text style={styles.lokasi}>{status}</Text>
            <Text style={styles.isi}>{message}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default CardListMailPage;

const styles = StyleSheet.create({
  text: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: -5,
  },
  isi: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  lokasi: {
    color: '#C61E24',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
  },
  container: {
    borderRadius: 5,
    backgroundColor: '#F5F3F3',
    width: '90%',
    marginVertical: 5,
    paddingTop: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  lingkar: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#ff4400',
    paddingTop: 17,
    paddingLeft: 8,
    margin: 20,
    color: '#ffffff',
  },
  textx: {
    color: '#ffffff',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    marginTop: -5,
    marginLeft: 10,
  },
});
