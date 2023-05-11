import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
} from 'react-native';
import {Prev, PrevOrange, IconAbsensi, IconProfile} from '../../assets';
import {CardListPengajuanLembur, Button} from '../../components';
import moment from 'moment';

const Profile = ({navigation, route}) => {
  const [datas, setDatas] = useState([]);
  const [niks, setNiks] = useState([]);
  const [names, setNames] = useState('');
  const [ektps, setEktps] = useState('');
  const [birthdates, setBirthdates] = useState('');
  const [phones, setPhones] = useState('');
  const [photos, setPhotos] = useState('');
  const [emails, setEmails] = useState('');
  const [sites, setSites] = useState('');
  // const [jobdesk_ids, setJobdesk_ids] = useState('');
  const [nik_kordins, setNik_kordins] = useState('');
  const [nik_korwils, setNik_korwils] = useState('');
  const [alamats, setAlamats] = useState('');
  const [jobdesks, setJobdesks] = useState('');
  const [start_contracts, setStart_contracts] = useState('');
  const [end_contracts, setEnd_contracts] = useState('');

  const getDataProfile = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        let text = JSON.parse(value);
        console.log(text);
        setNiks(text.data.nik);
        setNames(text.data.name);
        setEktps(text.data.ektp);
        setBirthdates(text.data.birthdate);
        setPhones(text.data.phone);
        setPhotos(text.data.photo);
        setAlamats(text.data.alamat);
        setEmails(text.data.email);
        setNik_kordins(text.data.nik_kordin);
        setNik_korwils(text.data.nik_korwil);
        setJobdesks(text.data.jobdesk);
        setSites(text.data.lokasi_name);
        setStart_contracts(text.data.start_contract);
        setEnd_contracts(text.data.end_contract);
        // alert(value);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headers}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              route.params.users === 'kdc'
                ? 'MainAppKDC'
                : route.params.users === 'korsn' || route.params.users === 'kor'
                ? 'MainApp'
                : 'MainAppUser',
              {
                users: route.params.users,
              },
            )
          }
          style={styles.touchable}>
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
          <Image style={styles.logoProfile} source={{uri: photos}} />
          <Text style={styles.judulHeadline}>{names}</Text>
          <Text style={styles.judulHeadline2}>{niks}</Text>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            backgroundColor: '#f8f8f8',
            marginHorizontal: 20,
            borderRadius: 10,
            marginTop: 15,
          }}>
          <View style={{margin: 10}}>
            <Text style={styles.judulHeadline3}>Lokasi</Text>
            <Text style={styles.judulHeadline4}>{sites}</Text>
            <Text style={styles.judulHeadline3}>Posisi</Text>
            <Text style={styles.judulHeadline4}>{jobdesks}</Text>
            {(route.params.users == 'korsn' ||
              route.params.users == 'kor' ||
              route.params.users == 'usersn' ||
              route.params.users == 'user') && (
              <View>
                <Text style={styles.judulHeadline3}>Start Contract</Text>
                <Text style={styles.judulHeadline4}>
                  {moment(start_contracts).format('DD-MM-Y')}
                </Text>
                <Text style={styles.judulHeadline3}>End Contract</Text>
                <Text style={styles.judulHeadline4}>
                  {moment(end_contracts).format('DD-MM-Y')}
                </Text>
              </View>
            )}
            <Text style={styles.judulHeadline3}>Email</Text>
            <Text style={styles.judulHeadline4}>{emails}</Text>
            <Text style={styles.judulHeadline3}>No Hp</Text>
            <Text style={styles.judulHeadline4}>{phones}</Text>
          </View>
        </View>

        {/* <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UbahProfile', {
                users: route.params.users,
              })
            }
            style={
              route.params.users === 'usersn' || route.params.users === 'korsn'
                ? styles.btnSectionOrange
                : styles.btnSection
            }>
            <Text style={styles.subtitleStyle}>UBAH PROFIL</Text>
          </TouchableOpacity>
        </View> */}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UbahPassword', {
                users: route.params.users,
              })
            }
            style={
              route.params.users === 'usersn' ||
              route.params.users === 'korsn' ||
              route.params.users === 'kdc'
                ? styles.btnSectionOrange
                : styles.btnSection
            }>
            <Text style={styles.subtitleStyle}>UBAH PASSWORD</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.replace('Login')}
            style={
              route.params.users === 'usersn' ||
              route.params.users === 'korsn' ||
              route.params.users === 'kdc'
                ? styles.btnSectionOrange
                : styles.btnSection
            }>
            <Text style={styles.subtitleStyle}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  headers: {
    height: 63,
    backgroundColor: 'white',
    elevation: 5,
    marginBottom: 20,
    paddingLeft: 10,
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  imageContainer: {
    width: 30,
    height: 30,
    marginTop: 15,
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
  tipeAbsen: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoProfile: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#000000',
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 10,
  },
  judulHeadline: {
    color: '#000000',
    fontSize: 22,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  judulHeadline2: {
    color: '#000000',
    fontSize: 18,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  judulHeadline2beda: {
    color: '#000000',
    fontSize: 18,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  judulHeadline3: {
    color: '#000000',
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  judulHeadline4: {
    color: '#000000',
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginHorizontal: 20,
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
  btnSectionOrange: {
    width: '100%',
    height: 49,
    backgroundColor: '#E57C37',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    marginTop: 10,
  },
});
