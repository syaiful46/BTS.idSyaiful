import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {CarBlue, MotorBlue, UangBlue} from '../../../assets';

const ButtonPinjaman = ({icons}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageAbsensi}
        source={
          icons == 'Mobil' ? CarBlue : icons == 'Motor' ? MotorBlue : UangBlue
        }
      />
    </View>
  );
};

export default ButtonPinjaman;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFF',
    width: 150,
    alignItems: 'center',
    marginTop: -15,
    paddingVertical: 10,
  },
  title: {
    color: 'white',
    /*fontFamily: 'Poppins-SemiBold',*/
    fontSize: 16,
    textAlign: 'center',
  },
  imageAbsensi: {
    width: 35,
    height: 15,
    alignItems: 'center',
  },
});
