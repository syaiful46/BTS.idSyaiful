import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const CardTipeAbsensi = ({title, active}) => {
  return (
    <View style={active === 'yes' ? styles.container : styles.containerNot}>
      <Text style={active === 'yes' ? styles.text : styles.textNot}>
        {title}
      </Text>
    </View>
  );
};

export default CardTipeAbsensi;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    backgroundColor: '#C61E24',
    height: 90,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
  },
  containerNot: {
    borderRadius: 6,
    backgroundColor: '#B7B7B8',
    height: 90,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
  textNot: {
    color: '#585656',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    flexWrap: 'wrap',
    textAlign: 'center',
  },
});
