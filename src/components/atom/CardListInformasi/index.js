import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {Calendar, iconI, iconHospitalWhite} from '../../../assets';

const CardListInformasi = ({navigations, title, icons, message, id}) => {
  return (
    <View
      style={
        icons == '2'
          ? styles.container
          : icons == '1'
          ? styles.containerI
          : styles.containerCalender
      }>
      <TouchableOpacity
        onPress={() =>
          navigations.navigate(
            icons == '2'
              ? 'DetailInformasiRS'
              : icons == '1'
              ? 'DetailInformasi'
              : 'DetailInformasiCalender',

            {
              id: id,
              title: title,
              icons: icons,
              message: message,
            },
          )
        }>
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
              marginTop: 0,
            }}>
            <Image
              source={
                icons == '2'
                  ? iconHospitalWhite
                  : icons == '1'
                  ? iconI
                  : Calendar
              }
              style={
                icons == '2'
                  ? styles.imageContainer
                  : icons == '1'
                  ? styles.imageContainerI
                  : styles.imageContainerCalendar
              }
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
      </TouchableOpacity>
    </View>
  );
};

export default CardListInformasi;

const styles = StyleSheet.create({
  text: {
    color: '#FFFF',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: -5,
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
    backgroundColor: '#0097bb',
    width: '90%',
    height: 110,
    marginBottom: 20,
    padding: 20,
    marginTop: -5,
  },
  containerI: {
    borderRadius: 5,
    backgroundColor: '#3d811d',
    width: '90%',
    height: 110,
    marginBottom: 20,
    padding: 20,
    marginTop: -5,
  },
  containerCalender: {
    borderRadius: 5,
    backgroundColor: '#cc005e',
    width: '90%',
    height: 110,
    marginBottom: 20,
    padding: 20,
    marginTop: -5,
  },
  imageContainer: {
    width: 35,
    height: 65,
    marginLeft: 5,
    resizeMode: 'center',
  },
  imageContainerI: {
    width: 35,
    height: 65,
    marginLeft: 15,
    resizeMode: 'center',
  },
  imageContainerCalendar: {
    width: 35,
    height: 65,
    marginLeft: 15,
    resizeMode: 'contain',
  },
});
