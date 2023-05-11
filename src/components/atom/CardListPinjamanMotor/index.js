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

const CardListPinjamanMotor = ({
  no,
  cicilan,
  uang,
  list,
  jenis,
  lunas,
  sisa,
  icons,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [datas, setDatas] = useState([]);

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
            flexDirection: 'row',
            alignSelf: 'flex-end',
            padding: 5,
            width: 100,
            height: 60,
          }}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginBottom: 10,
                    alignSelf: 'flex-start',
                  }}>
                  <Text style={styles.modalText}>NOTIFIKASI</Text>
                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text style={styles.textStyle}>X</Text>
                  </Pressable>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'baseline',
                  }}>
                  <Text
                    style={{fontSize: 15, fontWeight: '600', color: '#0B1A47'}}>
                    Periode Pinjaman: {jenis + 'x'}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'baseline',
                  }}>
                  <View
                    style={{
                      width: 40,
                      height: 30,
                      borderWidth: 1,
                      borderColor: 'green',
                      backgroundColor: 'green',
                    }}></View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '600',
                      marginLeft: 5,
                      paddingTop: 5,
                      color: '#0B1A47',
                    }}>
                    Lunas
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'baseline',
                    marginTop: 5,
                    marginBottom: 10,
                  }}>
                  <View
                    style={{
                      width: 40,
                      height: 30,
                      borderWidth: 1,
                      borderColor: 'green',
                      backgroundColor: 'white',
                    }}></View>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: '600',
                      marginLeft: 5,
                      paddingTop: 5,
                      color: '#0B1A47',
                    }}>
                    Belum dibayar
                  </Text>
                </View>

                <CardListModal jumlahLunas={lunas} jumlahPinjaman={jenis} />
              </View>
            </View>
          </Modal>

          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image
              style={{
                width: 40,
                height: 40,
                marginLeft: 15,
                marginRight: 15,
              }}
              source={IconAbsensi}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CardListPinjamanMotor;

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
    alignSelf: 'center',
    marginHorizontal: 15,
  },
  modalView: {
    marginTop: 5,
    marginHorizontal: 20,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    padding: 15,
    height: 630,
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
    color: '#0B1A47',
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
