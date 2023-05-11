import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {
  BeritaMenu,
  AbsensiMenu,
  DashboardMenu,
  ApprovalMenu,
} from '../../../assets';

const CardDashboard = ({title, jenis}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageContainer}
        source={
          jenis == 'absensi'
            ? AbsensiMenu
            : jenis == 'berita'
            ? BeritaMenu
            : jenis == 'approval'
            ? ApprovalMenu
            : DashboardMenu
        }
      />
      <Text style={styles.judul}>{title}</Text>
    </View>
  );
};

export default CardDashboard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    width: 142,
    height: 109,
    borderRadius: 10,
  },
  imageContainer: {
    position: 'absolute',
    bottom: 30,
    borderRadius: 10,
  },
  judul: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: 10,
    position: 'absolute',
    bottom: 5,
  },
});
