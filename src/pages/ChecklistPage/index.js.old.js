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
import {Prev, PrevOrange} from '../../assets';
import {
  InputCalendar,
  CardListApproval,
  ButtonDalamGrey,
  ButtonDalam,
} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import config from '../../lib/configurations';

const ApprovalPage = ({navigation, route}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Dinas');
  const [openB, setOpenB] = useState(false);
  const [valueB, setValueB] = useState(0);
  const [datas, setDatas] = useState([]);
  const [ids, setIds] = useState('');
  const [niks, setNiks] = useState('');
  const [mulais, setMulais] = useState('');
  const [akhirs, setAkhirs] = useState('');
  const [keperluans, setKeperluans] = useState('');
  const [tujuans, setTujuans] = useState('');
  const [photos, setPhotos] = useState('');
  const [deleteds, setDeleteds] = useState('');
  const [statuses, setStatuses] = useState('');
  const [created_ats, setCreated_ats] = useState('');
  const [created_bys, setCreated_bys] = useState('');
  const [updated_bys, setUpdated_bys] = useState('');
  const [updated_ats, setUpdated_ats] = useState('');
  const [names, setNames] = useState('');
  const [lokasix, setLokasix] = useState('');
  const [page, setPages] = useState(1);
  const [totalpages, setTotalpages] = useState(0);

  const [kategori, setKategori] = useState([
    {
      label: 'Belum Approv',
      value: 0,
    },
    {label: 'Sudah Approv', value: 1},
    {
      label: 'Tidak Approv',
      value: 2,
    },
  ]);

  const [kategoriKDC, setKategoriKDC] = useState([
    {
      label: 'Belum Approv',
      value: [0, 1, 2],
    },
    {label: 'Sudah Approv', value: 3},
    {
      label: 'Tidak Approv',
      value: 4,
    },
  ]);

  const [status, setStatus] = useState(route.params.statusnya);

  const [items2, setItems2] = useState([
    {label: 'Dinas', value: 'Dinas'},
    {label: 'Lembur', value: 'lembur'},
  ]);

  const [items, setItems] = useState([
    {label: 'Dinas', value: 'Dinas'},
    {label: 'Driver', value: 'Driver'},
    {label: 'Lembur', value: 'lembur'},
    {label: 'Cuti/Sakit/Izin', value: 'Cuti/Sakit/Izin'},
  ]);

  /*
  const getDataProfile = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        let text = JSON.parse(value);
        setNiks(text.data.nik);
        setNames(text.data.name);
        setLokasix(text.data.lokasi_id);

        // alert(lokasix);
      }
    } catch (error) {}
  };

  */

  const getDataApproval = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        let text = JSON.parse(value);

        // console.log(lokasix);

        var myHeadersx = new Headers();
        myHeadersx.append('x-access-token', text.data.token);

        var requestOptions = {
          method: 'GET',
          headers: myHeadersx,
          redirect: 'follow',
        };

        /* alert(config.api.host +
            '/Approval/Listdinas?lokasi_id=' +
            text.data.manage +
            '&page=' +
            page +
            '&status=' +
            valueB); */

        fetch(
          config.api.host +
            '/Approval/Listdinas?lokasi_id=' +
            text.data.manage +
            '&page=' +
            page +
            '&status=' +
            valueB,
          requestOptions,
        )
          .then(response => response.json())
          .then(json => {
            console.log(json);
            console.log(
              config.api.host +
                '/Approval/Listdinas?lokasi_id=' +
                text.data.manage +
                '&page=' +
                page +
                '&status=' +
                valueB,
            );
            if (json.status == 200) {
              setDatas(json.data.list);
              setTotalpages(json.data.total_page);
            }
          })
          .catch(error => console.log('error', error));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    // getDataProfile();
    getDataApproval();
  }, [page, valueB]);

  const prevNext = () => {
    //alert(page);
    //let a = page + 1;
    if (page < totalpages) {
      setPages(page + 1);
    }
    //alert(totalpage);
    //getDataBerita();
  };

  const prevNext2 = () => {
    //alert(page);
    //let a = page + 1;
    if (page > 1) {
      setPages(page - 1);
    }
    //alert(page);
    //getDataBerita();
  };

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
          <Text style={styles.textButtonH}>Approval Dinas</Text>
        </View>
        <Text
          style={[styles.textButtonH, {fontSize: 15, marginHorizontal: 20}]}>
          Pilih Tipe
        </Text>
        <View style={{marginHorizontal: 20}}>
          <DropDownPicker
            open={open}
            value={value}
            placeholder="Pilih Item"
            items={route.params.users === 'kdc' ? items2 : items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={() =>
              value === 'Dinas'
                ? navigation.navigate('ApprovalPage', {
                    users: route.params.users,
                  })
                : value === 'lembur'
                ? navigation.navigate('ApprovalPageLembur', {
                    users: route.params.users,
                  })
                : value === 'Driver'
                ? navigation.navigate('ApprovalPageDriver', {
                    users: route.params.users,
                  })
                : navigation.navigate('ApprovalPageKetidakhadiran', {
                    users: route.params.users,
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
              marginTop: 10,
              elevation: -1,
              zIndex: -1,
            },
          ]}>
          Status
        </Text>
        <View
          style={{
            marginHorizontal: 20,
            elevation: -1,
            zIndex: -1,
          }}>
          <DropDownPicker
            placeholder="Pilih Item"
            listMode="SCROLLVIEW"
            open={openB}
            value={valueB}
            items={route.params.users === 'kdc' ? kategoriKDC : kategori}
            setOpen={setOpenB}
            setValue={setValueB}
            setItems={setKategori}
            // onChangeValue={a => setStatus(a)}
          />
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
          Dari Tanggal
        </Text>
        <View style={{marginHorizontal: 20, elevation: -2, zIndex: -2}}>
          <InputCalendar users={route.params.users} title="2022-04-08" />
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
          Sampai Tanggal
        </Text>
        <View
          style={{
            marginHorizontal: 20,
            marginBottom: 10,
            elevation: -2,
            zIndex: -2,
          }}>
          <InputCalendar users={route.params.users} title="2022-04-08" />
        </View>
        {datas.map(
          (approval, index) =>
            index >= 0 && (
              <TouchableOpacity
                style={{width: '100%', marginTop: 10}}
                onPress={() =>
                  route.params.users === 'kdc'
                    ? navigation.navigate('ApprovalPengajuanKDC', {
                        users: route.params.users,
                        idnya: approval.id,
                        catatan: approval.catatan,
                        catatan2: approval.catatan2,
                        statusnya: approval.status,
                        nama: approval.name,
                        niknya: approval.nik,
                        tugas: approval.keperluan,
                        lokasi: approval.tujuan,
                        mulai: approval.tanggal_mulai,
                        akhir: approval.tanggal_berakhir,
                      })
                    : approval.status == 3 || approval.status == 4
                    ? navigation.navigate('ApprovalStatusPage', {
                        title:
                          approval.status == 3 ? 'DITERIMA KDC' : 'DITOLAK KDC',
                        warna: 'hijau',
                        users: route.params.users,
                        id: approval.id,
                        status: approval.status,
                        catatan: approval.catatan,
                        catatan2: approval.catatan2,
                        name: approval.name,
                        nik: approval.nik,
                        startdate: approval.tanggal_mulai,
                        enddate: approval.tanggal_berakhir,
                        keperluan: approval.keperluan,
                        tujuan: approval.tujuan,
                      })
                    : navigation.navigate('ApprovalPengajuanPage', {
                        users: route.params.users,
                        idnya: approval.id,
                        statusnya: approval.status,
                        nama: approval.name,
                        catatan: approval.catatan,
                        catatan2: approval.catatan2,
                        niknya: approval.nik,
                        tugas: approval.keperluan,
                        lokasi: approval.tujuan,
                        mulai: approval.tanggal_mulai,
                        akhir: approval.tanggal_berakhir,
                      })
                }>
                <CardListApproval
                  route={route}
                  users={route.params.users}
                  title={approval.name}
                  status={approval.keperluan}
                  sub_status={approval.tujuan}
                  tanggal={approval.tanggal_mulai}
                  endtanggal={approval.tanggal_berakhir}
                  icons={approval.status}
                />
              </TouchableOpacity>
            ),
        )}

        {totalpages <= 1 ? (
          ''
        ) : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 25,
              alignSelf: 'center',
            }}>
            <TouchableOpacity onPress={prevNext2}>
              {page == 1 ? (
                <ButtonDalamGrey title="SEBELUMNYA" />
              ) : (
                <ButtonDalam users={route.params.users} title="SEBELUMNYA" />
              )}
            </TouchableOpacity>
            <View style={{marginLeft: 20}} />
            <TouchableOpacity onPress={prevNext}>
              {page >= totalpages ? (
                <ButtonDalamGrey title="SELANJUTNYA" />
              ) : (
                <ButtonDalam users={route.params.users} title="SELANJUTNYA" />
              )}
            </TouchableOpacity>
          </View>
        )}

        {/* <View style={[styles.buttonContainer, {marginTop: 10}]}>
          <TouchableOpacity
            style={
              route.params.users === 'korsn' || route.params.users === 'kdc'
                ? styles.btnSectionOrange
                : styles.btnSection
            }>
            <Text style={styles.subtitleStyle}>Muat Lebih Banyak</Text>
          </TouchableOpacity>
        </View> */}
        <View style={{marginBottom: 30}} />
      </ScrollView>
    </View>
  );
};

export default ApprovalPage;

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
