import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  IconAbsensi,
  IconKetidakhadiran,
  IconApproval,
  IconDashboard,
  IconBerita,
} from '../../../assets';

const CardIcon = ({title, warna}) => {
  return (
    <View
      style={warna === 'orange' ? styles.containerOrange : styles.container}>
      <Image
        source={
          title == 'Absensi'
            ? IconAbsensi
            : title == 'Ketidakhadiran'
            ? IconKetidakhadiran
            : title == 'Berita'
            ? IconBerita
            : title == 'Report'
            ? IconDashboard
            : IconApproval
        }
      />
    </View>
  );
};

export default CardIcon;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: '#FDEFEF',
    height: 60,
    width: 60,
    marginLeft: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerOrange: {
    borderRadius: 8,
    backgroundColor: '#F1B355',
    height: 60,
    width: 60,
    marginLeft: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
