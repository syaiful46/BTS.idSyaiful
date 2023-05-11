import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  AsyncStorage,
  PermissionsAndroid,
  ActivityIndicator,
} from 'react-native';
import {Prev, PrevOrange, IconKetidakhadiran} from '../../assets';
import {
  CardTipeAbsensi,
  InputCalendar,
  Input,
  JenisRawat,
} from '../../components';
var ImagePicker = require('react-native-image-picker');
//import SelectDropdown from 'react-native-select-dropdown';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import config from '../../lib/configurations';

const KetidakhadiranAjukanPage = ({navigation, route}) => {
  const [fileUri, setFileUri] = useState(undefined);
  const [fileType, setFileType] = useState(undefined);
  const [fileName, setFileName] = useState(undefined);
  const [izins, setIzins] = useState('inap');
  const [tglAwal, setTglAwal] = useState(undefined);
  const [tglAkhir, setTglAkhir] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Cuti');
  // const [items, setItems] = useState([
  //   {label: 'Cuti', value: 'Cuti'},
  //   {label: 'Izin', value: 'Izin'},
  //   {label: 'Sakit', value: 'Sakit'},
  // ]);
  const [pwr, setPwr] = useState('Cuti');
  const [jenisCuti, setJenisCuti] = useState(3);
  const [openAnggota, setOpenAnggota] = useState(false);
  const [valueAnggota, setValueAnggota] = useState(null);
  const [itemsAnggota, setItemsAnggota] = useState([
    {label: 'Semua', value: 'Semua'},
  ]);

  const [openCuti, setOpenCuti] = useState(false);
  const [valueCuti, setValueCuti] = useState(3);
  const [itemsCuti, setItemsCuti] = useState([
    {label: 'Cuti Tahunan', value: 'Cuti Tahunan'},
    {label: 'Cuti Menikah', value: 'Cuti Menikah'},
    {label: 'Cuti Saudara Meninggal', value: 'Cuti Saudara Meninggal'},
  ]);
  const [starts, setStarts] = useState('');
  const [ends, setEnds] = useState('');
  const [category_ids, setCategory_ids] = useState([
    {label: 'Cuti', value: 0},
    {label: 'Sakit', value: 1},
    {label: 'Izin', value: 2},
  ]);
  const [photos, setPhotos] = useState('');
  const [subcategory_ids, setSubcategory_ids] = useState([
    {label: 'Cuti Tahunan', value: 3},
    {label: 'Cuti Menikah', value: 2},
    {label: 'Cuti Saudara Meninggal', value: 1},
  ]);

  const getListCuti = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        let text = JSON.parse(value);

        var myHeadersx = new Headers();
        myHeadersx.append('x-access-token', text.data.token);

        var requestOptions = {
          method: 'GET',
          headers: myHeadersx,
          redirect: 'follow',
        };

        fetch(config.api.host + '/Ketidakhadiran/kategori?id=2', requestOptions)
          .then(response => response.json())
          .then(json => {
            setDatas(json.data);
          })
          .catch(error => console.log('error', error));
      }
    } catch (error) {}
  };

  const submitHandler = async () => {
    try {
      setLoading(true);

      const selisih = Math.floor(
        Math.abs(tglAkhir - tglAwal) / (1000 * 60 * 60 * 24),
      );

      let lolos = 0;

      if (jenisCuti == 3) {
        if (selisih + 1 > datas.total) {
          lolos = 1;
        }
      } else if (jenisCuti == 2) {
        if (selisih + 1 > 3) {
          lolos = 1;
        }
      } else {
        if (selisih + 1 > 2) {
          lolos = 1;
        }
      }

      if (fileUri == undefined) {
        lolos = 2;
      }

      if (lolos == 1) {
        alert('Maaf Pengajuan Jumlah Cuti  Anda Melebihi Batas');
        setLoading(false);
      } else if (lolos == 2) {
        alert('Silahkan Mengupload Bukti');
        setLoading(false);
      } else {
        const value = await AsyncStorage.getItem('user');
        //alert(value);
        if (value !== null) {
          let text = JSON.parse(value);

          let mulai = moment(tglAwal).format('DD-MM-Y');
          let akhir = moment(tglAkhir).format('DD-MM-Y');

          var myHeaders = new Headers();
          myHeaders.append('x-access-token', text.data.token);

          var formdata = new FormData();
          // alert(fileUri);
          if (fileUri != undefined) {
            formdata.append('photo', {
              uri: fileUri,
              type: fileType,
              name: fileName,
            });
          }
          formdata.append('start', mulai);
          formdata.append('end', akhir);
          formdata.append('category_id', 0);
          formdata.append('subcategory_id', jenisCuti);

          console.log(formdata);

          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow',
          };

          fetch(config.api.host + '/Ketidakhadiran/ajukan', requestOptions)
            .then(response => response.json())
            .then(json => {
              alert('suskes dapat data');
              console.log(json);
              setLoading(false);
              if (json.status === 200) {
                navigation.replace('KetidakhadiranNotifPage', {
                  users: route.params.users,
                  start: mulai,
                  end: akhir,
                  category_id: 0,
                  subcategory_id: jenisCuti,
                  photo: {
                    uri: fileUri,
                    type: fileType,
                    name: fileName,
                  },
                });
                alert('Anda Berhasil Mengajukan Cuti');
              } else {
                alert(
                  'Gagal mengajukan Cuti, pastikan mengisi data dengan sesuai',
                );
              }

              //cek user apakah sn atau asn
            })
            .catch(error => {
              console.log(error);
              setLoading(false);
            });
        }
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Truventorm Camera Permission',
          message:
            'Truventorm needs access to your camera ' +
            'to set profile picture.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        chooseFromCamera();
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const chooseFromCamera = async () => {
    var options = {
      mediaType: 'photo',
      cameraType: 'front',
      maxWidth: 300,
      maxHeight: 400,
      storageOptions: {
        skipBackup: true,
        path: 'images',
        cameraRoll: false,
      },
    };

    await ImagePicker.launchCamera(options, response => {
      //console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        console.log('response', JSON.stringify(response));
        setFileType(response.assets[0].type);
        setFileName(response.assets[0].fileName);
        setFileUri(response.assets[0].uri);
      }
    });
  };

  useEffect(() => {
    getListCuti();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.headers}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AbsensiPage', {
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
        <View style={styles.container} />
        <View
          style={
            route.params.users === 'korsn' || route.params.users === 'usersn'
              ? styles.buttonHOrange
              : styles.buttonH
          }>
          <Text style={styles.textButtonH}>PENGAJUAN CUTI/SAKIT/IZIN</Text>
        </View>
        {/* {(route.params.users == 'korsn' || route.params.users == 'kor') && (
          <Text
            style={[
              styles.textButtonH,
              {fontSize: 15, marginHorizontal: 20, marginTop: 20},
            ]}>
            Anggota
          </Text>
        )} */}
        {/* {(route.params.users == 'korsn' || route.params.users == 'kor') && (
          <View style={{marginHorizontal: 20}}>
            <DropDownPicker
              placeholder="Pilih Item"
              open={openAnggota}
              value={valueAnggota}
              items={itemsAnggota}
              setOpen={setOpenAnggota}
              setValue={setValueAnggota}
              setItems={setItemsAnggota}
            />
          </View>
        )} */}
        <Text
          style={[
            styles.textButtonH,
            {fontSize: 15, marginHorizontal: 20, marginTop: 20},
          ]}>
          Alasan Anda tidak hadir karena?
        </Text>
        <View style={{marginHorizontal: 20, elevation: 3}}>
          <DropDownPicker
            placeholder="Cuti"
            open={open}
            value={value}
            items={category_ids}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setCategory_ids}
            onChangeValue={() =>
              value === 0
                ? navigation.navigate('KetidakhadiranAjukanPage', {
                    users: route.params.users,
                    start: starts,
                    end: ends,
                    category_id: category_ids,
                    subcategory_id: subcategory_ids,
                  })
                : value === 1
                ? navigation.navigate('KetidakhadiranAjukanPageSakit', {
                    users: route.params.users,
                    start: starts,
                    end: ends,
                    category_id: category_ids,
                    subcategory_id: subcategory_ids,
                  })
                : navigation.navigate('KetidakhadiranAjukanPageIzin', {
                    users: route.params.users,
                    start: starts,
                    end: ends,
                    category_id: category_ids,
                    subcategory_id: subcategory_ids,
                  })
            }
          />
        </View>
        <Text
          style={[
            styles.textButtonH,
            {
              fontSize: 15,
              marginHorizontal: 20,
              marginTop: 20,
              elevation: -1,
              zIndex: -1,
            },
          ]}>
          Pilih Jenis Cuti
        </Text>
        <View style={{marginHorizontal: 20, elevation: -1, zIndex: -1}}>
          <DropDownPicker
            placeholder="Pilih Item"
            open={openCuti}
            value={valueCuti}
            items={subcategory_ids}
            setOpen={setOpenCuti}
            setValue={setValueCuti}
            setItems={setSubcategory_ids}
            onChangeValue={values => setJenisCuti(values)}
          />
        </View>
        <View
          style={
            route.params.users === 'korsn' || route.params.users === 'usersn'
              ? styles.sisaCutiOrange
              : styles.sisaCuti
          }>
          {jenisCuti === 3 ? (
            <Text style={styles.cutiStyle}>
              * Sisa Cuti : {jenisCuti === 3 ? datas.total : 0} Hari
            </Text>
          ) : (
            <Text style={styles.cutiStyle}>
              * Max Cuti : {jenisCuti === 1 ? 2 : 3} Hari
            </Text>
          )}
        </View>
        <Text
          style={[
            styles.textButtonH,
            {
              fontSize: 15,
              marginHorizontal: 20,
              marginTop: 20,
              elevation: -2,
              zIndex: -2,
            },
          ]}>
          Tanggal Mulai
        </Text>
        <View style={{marginHorizontal: 20, elevation: -2, zIndex: -2}}>
          <InputCalendar
            users={route.params.users}
            value={tglAwal}
            onChange={value => setTglAwal(value)}
            title="2022-04-08"
          />
        </View>
        <Text
          style={[
            styles.textButtonH,
            {fontSize: 15, marginHorizontal: 20, marginTop: 20},
          ]}>
          Sampai
        </Text>
        <View style={{marginHorizontal: 20}}>
          <InputCalendar
            users={route.params.users}
            value={tglAkhir}
            onChange={value => setTglAkhir(value)}
            title="2022-04-08"
          />
        </View>
        {/* <Text
          style={[
            styles.textButtonH,
            {fontSize: 15, marginHorizontal: 20, marginTop: 20},
          ]}>
          Faskes
        </Text>
        <View style={{marginHorizontal: 20}}>
          <Input bg="bg" password={false} title="RS Global Sejahtera" />
        </View> */}
        <Text
          style={[
            styles.textButtonH,
            {fontSize: 15, marginHorizontal: 20, marginTop: 15},
          ]}>
          Bukti
        </Text>
        {fileUri != undefined && (
          <View>
            <Image style={styles.viewImage} source={{uri: fileUri}} />
          </View>
        )}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={requestCameraPermission}
            style={
              route.params.users === 'korsn' || route.params.users === 'usersn'
                ? styles.btnSectionOrange
                : styles.btnSection
            }>
            <Text style={styles.subtitleStyle}>
              {fileUri != undefined ? 'UBAH FOTO FORM CUTI' : 'FOTO FORM CUTI'}
            </Text>
          </TouchableOpacity>
        </View>
        {loading && <ActivityIndicator size="large" />}
        {loading === false && (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={submitHandler}
              style={[styles.btnSection, {backgroundColor: 'black'}]}>
              <Text style={styles.subtitleStyle}>KIRIM</Text>
            </TouchableOpacity>
          </View>
        )}
        <View style={{marginBottom: 30}} />
      </ScrollView>
    </View>
  );
};

export default KetidakhadiranAjukanPage;

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
  textButtonH: {
    color: '#0B1A47',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
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
  shift: {
    backgroundColor: '#FDEFEF',
    borderRadius: 6,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    marginTop: 5,
    justifyContent: 'center',
  },
  terlambat: {
    color: '#C71E25',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 15,
  },
  viewImage: {
    marginVertical: 15,
    marginHorizontal: 15,
    flex: 1,
    height: 500,
    resizeMode: 'cover',
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
  map: {
    marginVertical: 15,
    marginHorizontal: 20,
    flex: 1,
    height: 400,
  },
  tipeAbsen: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sisaCuti: {
    backgroundColor: '#C61E24',
    borderRadius: 6,
    height: 34,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: -2,
    zIndex: -2,
  },
  sisaCutiOrange: {
    backgroundColor: '#E57C37',
    borderRadius: 6,
    height: 34,
    marginHorizontal: 20,
    marginTop: 20,
    elevation: -2,
    zIndex: -2,
  },
  cutiStyle: {
    color: 'white',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    marginHorizontal: 10,
    paddingTop: 6,
    fontWeight: 'bold',
  },
});
