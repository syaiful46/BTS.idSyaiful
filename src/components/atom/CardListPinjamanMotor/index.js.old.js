import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
  Pressable,
  AsyncStorage,
} from 'react-native';
import {
  Cancel,
  Approve,
  Map,
  Info,
  Calendar,
  IconAbsensi,
} from '../../../assets';
import CardListModal from '../CardListModal';
import {ScrollView} from 'react-native-gesture-handler';
import config from '../../../lib/configurations';

const CardListPinjaman = ({no, cicilan, uang, list, jenis, icons}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [datas, setDatas] = useState([]);
  const [periodePinjaman, setPeriodePinjaman] = useState('');
  const [lunas, setLunas] = useState('');
  const [belumBayar, setBelumBayar] = useState('');

  const getDataMotor = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      //alert(value);
      if (value !== null) {
        let text = JSON.parse(value);

        var myHeadersx = new Headers();
        myHeadersx.append('x-access-token', text.token);

        var requestOptions = {
          method: 'GET',
          headers: myHeadersx,
          redirect: 'follow',
        };

        fetch(config.api.host + '/Pinjaman?type=motor', requestOptions)
          .then(response => response.json())
          .then(json => {
            console.log(json.data);
            setDatas(json.data.list);
            setPeriodePinjaman(json.data.list[0].lama_pinjaman);
            setLunas(json.data.list[0].lunas_pinjaman);
            setBelumBayar(json.data.list[0].sisa_pinjaman);
            // alert(datas);
            //return json;
          })
          .catch(error => console.log('error', error));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    getDataMotor();
  }, []);

  return (
    <View style={styles.tipeAbsen}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'stretch',
          marginTop: 15,
          justifyContent: 'space-between',
          borderBottomWidth: 1,
          paddingBottom: 10,
          borderColor: 'lightgray',
        }}>
        <View
          style={{
            flexDirection: 'column',
            padding: 5,
            marginLeft: 110,
            alignSelf: 'flex-start',
          }}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            {no}.
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'blue'}}>
            Rp.
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'stretch',
            padding: 5,
            borderColor: 'lightgray',
            borderRightWidth: 1,
            width: 150,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
              textTransform: 'uppercase',
            }}>
            {list}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'blue'}}>
            {uang}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'column',
            alignSelf: 'flex-end',
            padding: 5,
            width: 100,
            height: 60,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Cicilan Ke
          </Text>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              color: 'black',
              textAlign: 'center',
            }}>
            {cicilan}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CardListPinjaman;

const styles = StyleSheet.create({
  isi: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 15,
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
    backgroundColor: 'lawngreen',
    height: 110,
    width: '90%',
    marginBottom: 20,
    padding: 20,
    marginTop: -5,
  },
  centeredView: {
    flex: 1,
    marginTop: 5,
  },
  modalView: {
    marginTop: 5,
    marginHorizontal: 20,
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    padding: 15,
    height: 645,
    width: 375,
    shadowColor: '#000',
  },
  text: {
    fontWeight: '800',
    fontSize: 16,
    textAlign: 'left',
    paddingLeft: 25,
  },
  textStyle: {
    color: 'lightgray',
    fontWeight: 'bold',
    textAlign: 'right',
    marginLeft: 90,
    fontSize: 20,
    // marginBottom: 200,
  },
  modalText: {
    textAlign: 'center',
    fontWeight: 'bold',
    marginLeft: 100,
    fontSize: 20,
    color: '#000',
    paddingBottom: -10,
  },
  tipeAbsen: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 10,
  },
  imageContainer: {
    width: 35,
    height: 35,
    marginLeft: 15,
  },
});
