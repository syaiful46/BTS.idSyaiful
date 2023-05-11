import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import {
  Cancel,
  Approve,
  Map,
  Info,
  Calendar,
  IconAbsensi,
} from '../../../assets';
import {useState} from 'react';
import CardListModal from '../CardListModal';
import {ScrollView} from 'react-native-gesture-handler';

const CardListPinjaman = ({no, cicilan, uang, list, jenis, icons}) => {
  const [modalVisible, setModalVisible] = useState(false);
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
          <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
            {list}
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold', color: 'blue'}}>
            {uang}
          </Text>
        </View>
        {jenis === 'motor' ? (
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
                    <Text style={{fontSize: 15, fontWeight: '600'}}>
                      Periode Pinjaman: 48x
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
                      }}>
                      Belum dibayar
                    </Text>
                  </View>

                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                  <CardListModal
                    no1="1"
                    warna="ijo"
                    no2="2"
                    warna2="ijo"
                    no3="3"
                    no4="4"
                    no5="5"
                  />
                </View>
              </View>
            </Modal>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image
                style={{width: 40, height: 40, marginLeft: 15, marginRight: 15}}
                source={IconAbsensi}
              />
            </TouchableOpacity>
          </View>
        ) : (
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
        )}
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
