import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  TextInput,
  Modal,
  Pressable,
} from 'react-native';
import {ILogo, ILogoService} from '../../assets';
import {Button, Input, Link} from '../../components';
import config from '../../lib/configurations';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VersionNumber from 'react-native-version-number';
// import {version, name} from '../../../package.json';
//import axios from 'axios';

const Login = ({navigation}) => {
  const [emails, setEmails] = useState('');
  const [passwords, setPasswords] = useState('');
  const [loading, setLoading] = useState(false);
  const [deviceId, setDeviceId] = useState('');
  const [playerId, setPlayerId] = useState('');
  const [datas, setDatas] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

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

  const submitHandler = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      username: emails,
      password: passwords,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(config.api.host + '/login', requestOptions)
      .then(response => response.json())
      .then(json => {
        setLoading(false);

        let text = json.data.nik;

        AsyncStorage.setItem('user', JSON.stringify(json));

        if (json.statusCode == 2110) {
          navigation.replace('MainApp', 'kor');
        }

        //cek user apakah sn atau asn
      })
      .catch(error => console.log('error', error));
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              ID Anda Tidak Aktif! Silahkan Menghubungi Admin!
            </Text>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>oke</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <View style={styles.pinkContainer}>
        <Text style={styles.title}>LOGIN</Text>
        <Input
          password={false}
          value={emails}
          onChangeText={value => setEmails(value)}
          title="Username"
        />
        <Input
          password={true}
          value={passwords}
          onChangeText={value => setPasswords(value)}
          title="Password"
        />

        <View style={{marginBottom: 30}} />
        {loading && <ActivityIndicator size="large" />}
        {loading === false && (
          <TouchableOpacity onPress={submitHandler}>
            <Button title="Masuk" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('Daftar')}>
          <Button title="Daftar" />
        </TouchableOpacity>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    width: 100,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    marginTop: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    color: 'black',
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
