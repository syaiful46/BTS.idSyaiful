import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {iconRp} from '../../../assets';

const CardListArsip = ({title, status, icons,message,date}) => {
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image
          source={iconRp}
          style={styles.imageContainer}
        />
        <View style={{flexDirection: 'column'}}>
          <Text style={styles.text}>{title}</Text>
          <Text style={styles.isi}>{date}</Text>
          <Text style={styles.isi}>{message}</Text>
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
    fontSize: 18,
    marginTop: -5,
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
    backgroundColor: '#F5F3F3',
    width: '90%',
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
});
