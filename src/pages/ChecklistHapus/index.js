import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Button,
} from 'react-native';
import {Prev, PrevOrange, Cuti} from '../../assets';
import {InputMulti, InputCalendar, Input} from '../../components';
import moment from 'moment';
import config from '../../lib/configurations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChecklistHapus = ({navigation, route}) => {
  const [keperluans, setKeperluans] = useState('');
  const [lokasis, setLokasis] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandler = async () => {
    try {
      setLoading(true);
      const value = await AsyncStorage.getItem('user');
      console.log(value);
      if (value !== null) {
        let text = JSON.parse(value);
        var myHeaders = new Headers();
        myHeaders.append('Authorization', 'Bearer' + ' ' + text.data.token);

        var requestOptions = {
          method: 'DELETE',
          headers: myHeaders,
          redirect: 'follow',
        };

        fetch(
          config.api.host + '/checklist/' + route.params.nomor,
          requestOptions,
        )
          .then(response => response.json())
          .then(json => {
            console.log(json);
            setLoading(false);
            if (json.statusCode == 2000) {
              navigation.replace('ChecklistPage', {
                users: route.params.users,
              });
              alert('Anda Berhasil Menghapus Checklist');
            } else {
              alert('Gagal Menghapus Checklist');
            }
            //cek user apakah sn atau asn
          })
          .catch(error => setLoading(false));
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headers}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('ChecklistPage', {
              users: route.params.users,
            })
          }>
          <Image
            source={
              route.params.users === 'korsn' || route.params.users === 'usersn'
                ? PrevOrange
                : Prev
            }
            style={styles.imageContainer}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* <View style={{alignItems: 'center'}}>
          <Text style={styles.textButtonH}>ABSENSI</Text>
        </View> */}
        <View
          style={
            route.params.users === 'korsn' || route.params.users === 'usersn'
              ? styles.buttonHOrange
              : styles.buttonH
          }>
          <Text style={styles.textButtonH}>HAPUS CHECKLIST</Text>
        </View>
        <Text
          style={[
            styles.textButtonH,
            {fontSize: 15, marginHorizontal: 20, marginTop: 20},
          ]}>
          ID
        </Text>
        <View style={styles.shift}>
          <Text style={styles.textButtonH}>{route.params.nomor}</Text>
        </View>
        <Text
          style={[
            styles.textButtonH,
            {fontSize: 15, marginHorizontal: 20, marginTop: 20},
          ]}>
          NAMA
        </Text>
        <View style={styles.shift}>
          <Text style={styles.textButtonH}>{route.params.nama}</Text>
        </View>

        {loading && <ActivityIndicator size="large" />}
        {loading === false && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={submitHandler}
              style={[styles.btnSection, {backgroundColor: 'black'}]}>
              <Text style={styles.subtitleStyle}>HAPUS</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={{marginBottom: 30}} />
      </ScrollView>
    </View>
  );
};

export default ChecklistHapus;

const styles = StyleSheet.create({
  headers: {
    height: 63,
    backgroundColor: 'white',
    elevation: 5,
    marginBottom: 8,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  imageContainer: {
    width: 30,
    height: 30,
    marginTop: 15,
  },
  shift: {
    backgroundColor: '#FDEFEF',
    borderRadius: 6,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
  imageAbsensi: {
    width: 30,
    height: 30,
    marginTop: 15,
    right: 0,
    position: 'absolute',
    marginRight: 10,
  },
  textHeader: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginTop: 20,
    marginLeft: 20,
    position: 'absolute',
    right: 0,
    marginRight: 50,
  },
  textButtonH: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
  textKeperluan: {
    color: '#0B1A47',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    paddingTop: 10,
  },
  buttonH: {
    backgroundColor: '#F29696',
    borderRadius: 6,
    height: 45,
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonHOrange: {
    backgroundColor: '#E57C37B2',
    borderRadius: 6,
    height: 45,
    marginHorizontal: 20,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 20,
    marginTop: 20,
  },
  subtitleStyle: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
  btnSection: {
    width: '100%',
    height: 49,
    backgroundColor: '#C61E24',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: 10,
  },
  shift: {
    backgroundColor: '#FDEFEF',
    borderRadius: 6,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
});
