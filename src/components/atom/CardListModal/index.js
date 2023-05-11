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
} from 'react-native';
import {
  Cancel,
  Approve,
  Map,
  Info,
  Calendar,
  IconAbsensi,
} from '../../../assets';
import config from '../../../lib/configurations';

const CardListModal = ({
  no1,
  no2,
  no3,
  no4,
  no5,
  warna,
  warna2,
  warna3,
  warna4,
  warna5,
  jumlahLunas,
  jumlahPinjaman,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [datas, setDatas] = useState([]);
  const [keterangan, setKeterangan] = useState('');

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
            setKeterangan(json.data.keterangan);
            // console.log(periodePinjaman);
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
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 1 && (
          <View
            style={jumlahLunas >= 1 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 1 ? styles.tulishijau : styles.tulisputih}>
              1
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 2 && (
          <View
            style={jumlahLunas >= 2 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 2 ? styles.tulishijau : styles.tulisputih}>
              2
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 3 && (
          <View
            style={jumlahLunas >= 3 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 3 ? styles.tulishijau : styles.tulisputih}>
              3
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 4 && (
          <View
            style={jumlahLunas >= 4 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 4 ? styles.tulishijau : styles.tulisputih}>
              4
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 5 && (
          <View
            style={jumlahLunas >= 5 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 5 ? styles.tulishijau : styles.tulisputih}>
              5
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 6 && (
          <View
            style={jumlahLunas >= 6 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 6 ? styles.tulishijau : styles.tulisputih}>
              6
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 7 && (
          <View
            style={jumlahLunas >= 7 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 7 ? styles.tulishijau : styles.tulisputih}>
              7
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 8 && (
          <View
            style={jumlahLunas >= 8 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 8 ? styles.tulishijau : styles.tulisputih}>
              8
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 9 && (
          <View
            style={jumlahLunas >= 9 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 9 ? styles.tulishijau : styles.tulisputih}>
              9
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 10 && (
          <View
            style={jumlahLunas >= 10 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 10 ? styles.tulishijau : styles.tulisputih}>
              10
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 11 && (
          <View
            style={jumlahLunas >= 11 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 11 ? styles.tulishijau : styles.tulisputih}>
              11
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 12 && (
          <View
            style={jumlahLunas >= 12 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 12 ? styles.tulishijau : styles.tulisputih}>
              12
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 13 && (
          <View
            style={jumlahLunas >= 13 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 13 ? styles.tulishijau : styles.tulisputih}>
              13
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 14 && (
          <View
            style={jumlahLunas >= 14 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 14 ? styles.tulishijau : styles.tulisputih}>
              14
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 15 && (
          <View
            style={jumlahLunas >= 15 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 15 ? styles.tulishijau : styles.tulisputih}>
              15
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 16 && (
          <View
            style={jumlahLunas >= 16 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 16 ? styles.tulishijau : styles.tulisputih}>
              16
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 17 && (
          <View
            style={jumlahLunas >= 17 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 17 ? styles.tulishijau : styles.tulisputih}>
              17
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 18 && (
          <View
            style={jumlahLunas >= 18 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 18 ? styles.tulishijau : styles.tulisputih}>
              18
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 19 && (
          <View
            style={jumlahLunas >= 19 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 19 ? styles.tulishijau : styles.tulisputih}>
              19
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 20 && (
          <View
            style={jumlahLunas >= 20 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 20 ? styles.tulishijau : styles.tulisputih}>
              20
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 21 && (
          <View
            style={jumlahLunas >= 21 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 21 ? styles.tulishijau : styles.tulisputih}>
              21
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 22 && (
          <View
            style={jumlahLunas >= 22 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 22 ? styles.tulishijau : styles.tulisputih}>
              22
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 23 && (
          <View
            style={jumlahLunas >= 23 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 23 ? styles.tulishijau : styles.tulisputih}>
              23
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 24 && (
          <View
            style={jumlahLunas >= 24 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 24 ? styles.tulishijau : styles.tulisputih}>
              24
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 25 && (
          <View
            style={jumlahLunas >= 25 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 25 ? styles.tulishijau : styles.tulisputih}>
              25
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 26 && (
          <View
            style={jumlahLunas >= 26 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 26 ? styles.tulishijau : styles.tulisputih}>
              26
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 27 && (
          <View
            style={jumlahLunas >= 27 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 27 ? styles.tulishijau : styles.tulisputih}>
              27
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 28 && (
          <View
            style={jumlahLunas >= 28 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 28 ? styles.tulishijau : styles.tulisputih}>
              28
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 29 && (
          <View
            style={jumlahLunas >= 29 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 29 ? styles.tulishijau : styles.tulisputih}>
              29
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 30 && (
          <View
            style={jumlahLunas >= 30 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 30 ? styles.tulishijau : styles.tulisputih}>
              30
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 31 && (
          <View
            style={jumlahLunas >= 31 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 31 ? styles.tulishijau : styles.tulisputih}>
              31
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 32 && (
          <View
            style={jumlahLunas >= 32 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 32 ? styles.tulishijau : styles.tulisputih}>
              32
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 33 && (
          <View
            style={jumlahLunas >= 33 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 33 ? styles.tulishijau : styles.tulisputih}>
              33
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 34 && (
          <View
            style={jumlahLunas >= 34 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 34 ? styles.tulishijau : styles.tulisputih}>
              34
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 35 && (
          <View
            style={jumlahLunas >= 35 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 35 ? styles.tulishijau : styles.tulisputih}>
              35
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 36 && (
          <View
            style={jumlahLunas >= 36 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 36 ? styles.tulishijau : styles.tulisputih}>
              36
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 37 && (
          <View
            style={jumlahLunas >= 37 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 37 ? styles.tulishijau : styles.tulisputih}>
              37
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 38 && (
          <View
            style={jumlahLunas >= 38 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 38 ? styles.tulishijau : styles.tulisputih}>
              38
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 39 && (
          <View
            style={jumlahLunas >= 39 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 39 ? styles.tulishijau : styles.tulisputih}>
              39
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 40 && (
          <View
            style={jumlahLunas >= 40 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 40 ? styles.tulishijau : styles.tulisputih}>
              40
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 41 && (
          <View
            style={jumlahLunas >= 41 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 41 ? styles.tulishijau : styles.tulisputih}>
              41
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 42 && (
          <View
            style={jumlahLunas >= 42 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 42 ? styles.tulishijau : styles.tulisputih}>
              42
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 43 && (
          <View
            style={jumlahLunas >= 43 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 43 ? styles.tulishijau : styles.tulisputih}>
              43
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 44 && (
          <View
            style={jumlahLunas >= 44 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 44 ? styles.tulishijau : styles.tulisputih}>
              44
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 45 && (
          <View
            style={jumlahLunas >= 45 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 45 ? styles.tulishijau : styles.tulisputih}>
              45
            </Text>
          </View>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'baseline',
        }}>
        {jumlahPinjaman >= 46 && (
          <View
            style={jumlahLunas >= 46 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 46 ? styles.tulishijau : styles.tulisputih}>
              46
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 47 && (
          <View
            style={jumlahLunas >= 47 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 47 ? styles.tulishijau : styles.tulisputih}>
              47
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 48 && (
          <View
            style={jumlahLunas >= 48 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 48 ? styles.tulishijau : styles.tulisputih}>
              48
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 49 && (
          <View
            style={jumlahLunas >= 49 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 49 ? styles.tulishijau : styles.tulisputih}>
              49
            </Text>
          </View>
        )}
        {jumlahPinjaman >= 50 && (
          <View
            style={jumlahLunas >= 50 ? styles.kotakhijau : styles.kotakputih}>
            <Text
              style={jumlahLunas >= 50 ? styles.tulishijau : styles.tulisputih}>
              50
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CardListModal;

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
  kotakhijau: {
    width: 55,
    height: 38,
    margin: 5,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'green',
    alignItems: 'center',
  },
  kotakputih: {
    width: 55,
    height: 38,
    margin: 5,
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  tulishijau: {
    margin: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  tulisputih: {
    margin: 6,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0B1A47',
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
    marginTop: 22,
  },
  modalView: {
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: '#F3F3F3',
    borderRadius: 20,
    padding: 15,
    height: 595,
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
