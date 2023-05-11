import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  AsyncStorage,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import {ILogo, ILogoService} from '../../assets';
import {Button, Input, Link} from '../../components';
import config from '../../lib/configurations';
import DeviceInfo from 'react-native-device-info';
//import axios from 'axios';

const Login = ({navigation}) => {
  const [emails, setEmails] = useState('');
  const [passwords, setPasswords] = useState('');
  const [loading, setLoading] = useState(false);
  const [deviceId, setDeviceId] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [datas, setDatas] = useState('');

  const getDeviceId = () => {
    // var unikId = DeviceInfo.getUniqueId();
    DeviceInfo.syncUniqueId().then(uniqueId => {
      setDeviceId(uniqueId);
      console.log(deviceId);
      // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
      // Android: "dd96dec43fb81c97"
      // Windows: ?
    });
  };

  const getPlayerId = () => {
    DeviceInfo.getInstanceId().then(instanceId => {
      setPlayerId(instanceId);
      console.log(playerId);
      // Android: da4e0245-5d6c-402a-a07c-0c5349f229e2
    });
  };

  //autoLogin
  const getDataDevice = async () => {
    //alert('masuk')
    // console.log(lokasix);'
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    DeviceInfo.syncUniqueId().then(uniqueId => {
      setDeviceId(uniqueId);
      console.log(deviceId);

      var raw = JSON.stringify({
        device_id: uniqueId,
        player_id: 'dbae9616-f13a-4ecb-9791-3d48174c3969',
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      // alert(uniqueId)

      fetch(config.api.host + '/logindeviceid', requestOptions)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setLoading(false);

          if (json.status == 200) {
            let text = json.data.nik;
            let cekcek = text.substr(0, 1);

            AsyncStorage.setItem('user', JSON.stringify(json));

            if (json.data.device_id == uniqueId) {
              if (json.data.jobdesk_id == 71) {
                //alert('KDC');
                navigation.replace('MainAppKDC', 'kdc');
              } else {
                if (json.data.jobdesk_id == 9) {
                  //alert('koordinator-ABS-' + text);
                  /* Alert.alert('Login Berhasil', 'Login Sukses', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);*/
                  navigation.replace('MainApp', 'kor');
                } else if (json.data.jobdesk_id == 5) {
                  //alert('korwil-ASN-' + text);
                  /*Alert.alert('Login Berhasil', 'Login Sukses', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);*/
                  navigation.replace('MainApp', 'korsn');
                } else {
                  if (cekcek == 'A') {
                    //alert('ASN-' + text);
                    navigation.replace('MainAppUser', 'usersn');
                  } else {
                    //alert('ABS-' + text);
                    navigation.replace('MainAppUser', 'user');
                  }
                }
              }
            } else {
              //alert('Device anda tidak terdaftar');
            }
          }
          //cek user apakah sn atau asn
        })
        .catch(error => console.log('error', error));
    });
  };
  useEffect(() => {
    getDataDevice();
    //getDeviceId();
    // deviceId !== null ? getDataDevice() : '';

    // getPlayerId();
  }, []);

  const updateDeviceId = async () => {
    try {
      setLoading(true);
      const valuex = await AsyncStorage.getItem('user');
      if (valuex !== null) {
        let text = JSON.parse(valuex);

        var myHeaders = new Headers();
        myHeaders.append('x-access-token', text.data.token);
        myHeaders.append('Content-Type', 'application/json');

        DeviceInfo.syncUniqueId().then(uniqueId => {
          setDeviceId(uniqueId);
          console.log(deviceId);
          // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
          // Android: "dd96dec43fb81c97"
          // Windows: ?

          var raw = JSON.stringify({
            device_id: uniqueId,
          });
          console.log(raw);

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow',
          };

          fetch(config.api.host + '/changedeviceid', requestOptions)
            .then(response => response.json())
            .then(json => {
              console.log(json);
              setLoading(false);
              if (json.status === 400) {
                Alert.alert('Login Gagal', json.data[0].msg, [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              }
              if (json.status === 204) {
                Alert.alert('Login Gagal', json.display_message, [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);
              }

              if (json.status == 200) {
                let text = json.data.nik;
                let cekcek = text.substr(0, 1);

                AsyncStorage.setItem('user', JSON.stringify(json));

                if (json.data.jobdesk_id == 71) {
                  //alert('KDC');
                  navigation.replace('MainAppKDC', 'kdc');
                } else {
                  if (json.data.jobdesk_id == 9) {
                    //alert('koordinator-ABS-' + text);
                    /* Alert.alert('Login Berhasil', 'Login Sukses', [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);*/
                    navigation.replace('MainApp', 'kor');
                  } else if (json.data.jobdesk_id == 5) {
                    //alert('korwil-ASN-' + text);
                    /*Alert.alert('Login Berhasil', 'Login Sukses', [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ]);*/
                    navigation.replace('MainApp', 'korsn');
                  } else {
                    if (cekcek == 'A') {
                      //alert('ASN-' + text);
                      navigation.replace('MainAppUser', 'usersn');
                    } else {
                      //alert('ABS-' + text);
                      navigation.replace('MainAppUser', 'user');
                    }
                  }
                }
              }

              //cek user apakah sn atau asn
            })

            .catch(error => setLoading(false));
        });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const submitHandler = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    DeviceInfo.syncUniqueId().then(uniqueId => {
      setDeviceId(uniqueId);
      console.log(deviceId);

      var raw = JSON.stringify({
        nik: emails,
        pin: passwords,
        device_id: uniqueId,
        player_id: 'dbae9616-f13a-4ecb-9791-3d48174c3969',
      });
      console.log(raw);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(config.api.host + '/login', requestOptions)
        .then(response => response.json())
        .then(json => {
          //console.log(json);
          setLoading(false);
          if (json.status === 400) {
            Alert.alert('Login Gagal', json.data[0].msg, [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          }
          if (json.status === 204) {
            Alert.alert('Login Gagal', json.display_message, [
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ]);
          }

          if (json.status == 200) {
            let text = json.data.nik;
            let cekcek = text.substr(0, 1);
            let dvd = json.data.device_id;

            DeviceInfo.syncUniqueId().then(uniqueId => {
              setDeviceId(uniqueId);
              console.log(deviceId);
              // iOS: "FCDBD8EF-62FC-4ECB-B2F5-92C9E79AC7F9"
              // Android: "dd96dec43fb81c97"
              // Windows: ?

              AsyncStorage.setItem('user', JSON.stringify(json));

              if (json.data.device_id == '') {
                updateDeviceId();
                dvd = uniqueId;
              }

              if (dvd == uniqueId) {
                //getDataDevice();
                if (json.data.jobdesk_id == 71) {
                  //alert('KDC');
                  navigation.replace('MainAppKDC', 'kdc');
                } else {
                  if (json.data.jobdesk_id == 9) {
                    //alert('koordinator-ABS-' + text);
                    /* Alert.alert('Login Berhasil', 'Login Sukses', [
                 {text: 'OK', onPress: () => console.log('OK Pressed')},
               ]);*/
                    navigation.replace('MainApp', 'kor');
                  } else if (json.data.jobdesk_id == 5) {
                    //alert('korwil-ASN-' + text);
                    /*Alert.alert('Login Berhasil', 'Login Sukses', [
                 {text: 'OK', onPress: () => console.log('OK Pressed')},
               ]);*/
                    navigation.replace('MainApp', 'korsn');
                  } else {
                    if (cekcek == 'A') {
                      //alert('ASN-' + text);
                      navigation.replace('MainAppUser', 'usersn');
                    } else {
                      //alert('ABS-' + text);
                      navigation.replace('MainAppUser', 'user');
                    }
                  }
                }
                // } else if (json.data.device_id == '') {
                //   updateDeviceId();
                //   alert('Berhasil Update Device, silakan login lagi');
              } else if (json.data.device_id !== uniqueId) {
                alert('Nik ini telah terdaftar dengan device lain');
              } else {
                alert('Device Tidak Terdaftar');
              }
            });
          }

          //cek user apakah sn atau asn
        })
        .catch(error => console.log('error', error));
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logoService} source={ILogo} />
        <View style={{marginLeft: 10}} />
        <Image style={styles.logo} source={ILogoService} />
      </View>
      <View style={styles.pinkContainer}>
        <Text style={styles.title}>Login Absensi Personil</Text>
        <Text style={styles.subTitle}>
          Silahkan masuk dengan menggunakan identitas anda
        </Text>
        <Input
          password={false}
          value={emails}
          onChangeText={value => setEmails(value)}
          title="ID"
        />
        <Input
          password={true}
          value={passwords}
          onChangeText={value => setPasswords(value)}
          title="PIN"
        />
        <View
          style={{
            marginLeft: -180,
            marginTop: 16,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('Lupapassword')}>
            <Link title="Lupa Kata Sandi?" />
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={getDeviceId}>
            <Text>Tunjukan</Text>
          </TouchableOpacity> */}
        </View>
        <View style={{marginBottom: 30}} />
        {loading && <ActivityIndicator size="large" />}
        {loading === false && (
          <TouchableOpacity onPress={submitHandler}>
            <Button title="Masuk" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  pinkContainer: {
    backgroundColor: '#Fdddac',
    borderRadius: 10,
    width: '90%',
    height: 450,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoService: {
    height: 30,
    width: 144,
  },
  logo: {
    height: 30,
    width: 160,
  },
  title: {
    color: '#023045',

    fontSize: 20,
  },

  subTitle: {
    color: '#0B1A47',

    fontSize: 14,
    marginHorizontal: 20,
    marginTop: 10,
  },
});
