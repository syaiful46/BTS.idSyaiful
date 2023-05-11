import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
  Dimensions,
  TextInput,
  Pressable,
  Modal,
} from 'react-native';
import {Prev, IconAbsensi, Notifikasi} from '../../assets';
import {
  CardTipeAbsensi,
  Input,
  ButtonDalam,
  InputCalendar,
  Button,
} from '../../components';
import config from '../../lib/configurations';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
var width = Dimensions.get('window').width;

const Daftar = ({navigation, onChange}) => {
  const [datas, setDatas] = useState([]);
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));
  const [modalVisible, setModalVisible] = useState(false);
  const [modalPindah, setModalPindah] = useState(false);
  const [emailnya, setEmailnya] = useState('');
  const [usernamenya, setUsernamenya] = useState('');
  const [passwordnya, setPasswordnya] = useState('');

  const submitHandler = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        email: emailnya,
        password: passwordnya,
        username: usernamenya,
      });
      console.log(raw);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      fetch(config.api.host + '/register', requestOptions)
        .then(response => response.json())
        .then(json => {
          console.log(json);
          if (json.statusCode == 2000) {
            navigation.replace('Login');
            alert('Anda Berhasil Mendaftar');
          } else {
            alert('Gagal Mendaftar');
          }
          //cek user apakah sn atau asn
        })
        .catch(error => console.log(error));
    } catch (error) {
      // Error retrieving data
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headers}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Image source={Prev} style={styles.imageContainer} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>REGISTER</Text>
        {/* <Image source={IconAbsensi} style={styles.imageAbsensi} /> */}
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.tipeAbsen}>
            <View style={styles.contentText}>
              <Text style={styles.text}>Email</Text>
            </View>
            <View style={styles.content}>
              <TextInput
                style={styles.input}
                placeholder="Masukkan email anda"
                onChangeText={a => setEmailnya(a)}
                placeholderTextColor="gray"
              />
            </View>

            <View style={styles.contentText}>
              <Text style={styles.text}>Username</Text>
            </View>
            <View style={styles.content}>
              <TextInput
                style={styles.input}
                onChangeText={a => setUsernamenya(a)}
                placeholder="Masukkan Username anda"
                placeholderTextColor="gray"
              />
            </View>

            <View style={styles.contentText}>
              <Text style={styles.text}>Password</Text>
            </View>
            <View style={styles.content}>
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                onChangeText={a => setPasswordnya(a)}
                placeholder="Masukkan Password anda"
                placeholderTextColor="gray"
              />
            </View>

            <View style={{marginLeft: 20}} />
          </View>
          <TouchableOpacity style={styles.btnStyle} onPress={submitHandler}>
            <Button title="DAFTAR" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Daftar;

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
    backgroundColor: 'white',
    alignItems: 'center',
  },
  btnStyle: {
    marginTop: 25,
    marginRight: 15,
    fontWeight: 'bold',
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
  input: {
    height: 40,
    width: width - 90,
    marginLeft: 75,
    borderWidth: 1,
    marginTop: 20,

    padding: 10,
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
  text: {
    color: 'orange',
    fontSize: 15,
    marginTop: 5,
    marginLeft: 75,
    textAlign: 'left',
    position: 'absolute',
    fontWeight: 'bold',
  },
  imageStyle: {
    marginTop: 20,
    position: 'absolute',
    right: 0,
  },
  textHeader: {
    color: '#0B1A47',
    /*fontFamily: 'Poppins-SemiBold', */
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
    position: 'absolute',
    right: 0,
    marginLeft: 20,
    marginRight: 140,
  },
  tipeAbsen: {
    alignItems: 'flex-start',
    marginTop: 10,
    position: 'relative',
    marginRight: 90,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
    marginLeft: 1,
  },
  contentText: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 5,
    marginLeft: 1,
  },
});
