import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Prev, PrevOrange} from '../../assets';
import {
  InputCalendar,
  CardListApproval,
  ButtonDalamGrey,
  ButtonDalam,
  Button,
} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import config from '../../lib/configurations';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ChecklistPage = ({navigation, route}) => {
  const [datas, setDatas] = useState([]);

  const getDataApproval = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        console.log(value);
        let text = JSON.parse(value);

        var myHeadersx = new Headers();
        myHeadersx.append('Authorization', 'Bearer' + ' ' + text.data.token);

        var requestOptions = {
          method: 'GET',
          headers: myHeadersx,
          redirect: 'follow',
        };

        fetch(config.api.host + '/checklist', requestOptions)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            if (json.statusCode == 2100) {
              setDatas(json.data);
            }
          })
          .catch(error => console.log('error', error));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    getDataApproval();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.headers}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              route.params.users === 'korsn' || route.params.users === 'kor'
                ? 'MainApp'
                : 'MainAppKDC',
              {
                users: route.params.users,
              },
            )
          }>
          <Image
            source={
              route.params.users === 'korsn' ||
              route.params.users === 'usersn' ||
              route.params.users === 'kdc'
                ? PrevOrange
                : Prev
            }
            style={styles.imageContainer}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.textButtonH}>CHECKLIST</Text>
          <Text style={{fontSize: 15, color: 'black'}}>
            Klik data untuk hapus
          </Text>
        </View>

        {datas.map(
          (checklistya, index) =>
            index >= 0 && (
              <TouchableOpacity
                style={{width: '100%', marginTop: 10}}
                onPress={() =>
                  navigation.navigate('ChecklistHapus', {
                    users: route.params.users,
                    nama: checklistya.name,
                    nomor: checklistya.id,
                  })
                }>
                <CardListApproval
                  route={route}
                  users={route.params.users}
                  nama={checklistya.name}
                  title={checklistya.id}
                  icons={checklistya.status}
                />
              </TouchableOpacity>
            ),
        )}

        <View style={{alignSelf: 'center'}}>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() =>
              navigation.navigate('TambahChecklist', {
                users: route.params.users,
              })
            }>
            <Button title="Tambah Data" />
          </TouchableOpacity>
        </View>

        <View style={{marginBottom: 30}} />
      </ScrollView>
    </View>
  );
};

export default ChecklistPage;

const styles = StyleSheet.create({
  headers: {
    height: 63,
    backgroundColor: 'white',
    elevation: 5,
    marginBottom: 8,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
  },
  imageContainer: {
    width: 30,
    height: 30,
    marginTop: 15,
  },
  textButtonH: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
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
  btnSectionOrange: {
    width: '100%',
    height: 49,
    backgroundColor: '#E57C37',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: 10,
  },
  subtitleStyle: {
    color: 'white',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    textAlign: 'center',
  },
});
