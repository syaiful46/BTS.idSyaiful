import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
var width = Dimensions.get('window').width;

const CardNotification = ({title, tanggal, resume}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{resume}</Text>
      <Text style={styles.text}>{tanggal}</Text>
    </View>
  );
};

export default CardNotification;

const styles = StyleSheet.create({
  text: {
    color: '#0B1A47',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginLeft: 10,
  },
  title: {
    color: 'darkorange',
    fontFamily: 'Poppins-Regular',
    fontSize: 17,
    marginLeft: 10,
    fontWeight: 'bold',
  },
  container: {
    borderRadius: 5,
    backgroundColor: '#F5F3F3',
    height: 85,
    width: width - 40,
    marginHorizontal: 20,
    marginVertical: 5,
    justifyContent: 'space-around',
    padding: 5,
  },
});
