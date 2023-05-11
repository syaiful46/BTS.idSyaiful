import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import {Prev, PrevOrange, Slider} from '../../assets';
import {
  ButtonDalam,
  ButtonDalamGrey,
  CardBerita,
  InputCalendar,
} from '../../components';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';
import config from '../../lib/configurations';

const BeritaPage = ({
  navigation,
  route,
  gambar,
  judul,
  id,
  highlight,
  tanggal,
  // kategori,
  berita,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'All', value: 0},
    {label: 'Tips', value: 3},
    {label: 'Informasi Lowongan Kerja', value: 1},
    {label: 'Informasi Kegiatan Internal', value: 2},
  ]);
  const [datas, setDatas] = useState([]);
  // const [dates, setDates] = useState('');
  // const [enddates, setEnddates] = useState('');
  const [ids, setIds] = useState('');
  const [mulai, setMulai] = useState('');
  const [akhir, setAkhir] = useState('');
  const [beritas, setBeritas] = useState('');
  const [juduls, setJuduls] = useState('');
  const [kategoris, setKategoris] = useState('0');
  const [gambars, setGambars] = useState('');
  const [sberita, setSberita] = useState('2022-03-01');
  const [eberita, setEberita] = useState('2022-10-15');
  const [page, setPages] = useState(1);
  const [totalpages, setTotalpages] = useState(0);

  const onChangeValue = kategori => {
    //alert(kategori)
    setKategoris(kategori);
    // getDataBerita();
    //console.log(kategori);
  };
  const onChangeStart = tanggal => {
    let tglX = moment(tanggal).format('Y-MM-DD');
    //alert(tglX)
    setSberita(tglX);
    console.log(tanggal);
    // getDataBerita();
  };
  const onChangeEnd = endtanggal => {
    let tglX2 = moment(endtanggal).format('Y-MM-DD');
    setEberita(tglX2);
    console.log(endtanggal);
    // getDataBerita();
  };

  const getDataBerita = async () => {
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

        //alert(eberita);
        console.log(
          config.api.host +
            '/infofilter?category=' +
            kategoris +
            '&start=' +
            sberita +
            '&end=' +
            eberita +
            '&page=' +
            page,
        );

        fetch(
          config.api.host +
            '/infofilter?category=' +
            kategoris +
            '&start=' +
            sberita +
            '&end=' +
            eberita +
            '&page=' +
            page,
          requestOptions,
        )
          .then(response => response.json())
          .then(json => {
            console.log(json);
            if (json.status == 200) {
              setDatas(json.data.iklan);
              setIds(json.data.iklan[0].id);
              setJuduls(json.data.iklan[0].resume);
              setMulai(json.data.iklan[0].start_date);
              // setAkhir(json.data.iklan[0].end_date);
              // setKategoris(json.data.iklan[0].kategori);
              setGambars(json.data.iklan[0].image);
              setBeritas(json.data.iklan[0].content);
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
    getDataBerita();
  }, [kategoris, sberita, eberita, page]);

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
                : route.params.users === 'kdc'
                ? 'MainAppKDC'
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
          <Text style={styles.textButtonH}>BERITA</Text>
        </View>
        <Text
          style={[styles.textButtonH, {fontSize: 15, marginHorizontal: 20}]}>
          Kategori
        </Text>
        <View style={{marginHorizontal: 20}}>
          <DropDownPicker
            placeholder="Pilih Item"
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            onChangeValue={e => onChangeValue(e)}
          />
        </View>
        <Text
          style={[
            styles.textButtonH,
            {fontSize: 15, marginHorizontal: 20, marginTop: 20},
          ]}>
          Dari Tanggal
        </Text>
        <View style={{marginHorizontal: 20}}>
          <InputCalendar
            users={route.params.users}
            title="2022-04-08"
            value={mulai}
            onChange={e => onChangeStart(e)}
          />
        </View>
        <Text
          style={[
            styles.textButtonH,
            {fontSize: 15, marginHorizontal: 20, marginTop: 20},
          ]}>
          Sampai Tanggal
        </Text>
        <View style={{marginHorizontal: 20}}>
          <InputCalendar
            users={route.params.users}
            title="2022-04-08"
            value={akhir}
            onChange={e => onChangeEnd(e)}
          />
        </View>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DetailBeritaPage', {
              users: route.params.users,
              id: ids,
              judul: juduls,
              gambar: gambars,
              berita: beritas,
              tanggal: mulai,
              kategori: kategoris,
            })
          }>
          <ImageBackground
            source={{uri: gambars}}
            resizeMode="cover"
            style={styles.imageHeadline}>
            <View style={styles.opacityHeadline} />
            <Text style={styles.tanggalHeadline}>
              {moment(mulai).format('DD MMMM YYYY')}
            </Text>
            <View
              style={
                route.params.users === 'korsn' ||
                route.params.users === 'usersn' ||
                route.params.users === 'kdc'
                  ? styles.tipsHeadlineOrange
                  : styles.tipsHeadline
              }
            />
            <Text style={styles.tipsText}>
              {kategoris === 0
                ? 'Tips'
                : kategoris === 1
                ? 'Informasi Lowongan Kerja'
                : 'Informasi Kegiatan Internal'}
            </Text>
            <Text style={styles.judulHeadline}>{juduls}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <View style={{marginTop: 30}} />

        <Text
          style={[
            styles.textButtonH,
            {fontSize: 20, marginLeft: 20, marginBottom: -5},
          ]}>
          Berita Lainnya
        </Text>
        <View style={styles.container}>
          {datas.map(
            (news, index) =>
              index >= 0 && (
                <CardBerita
                  route={route}
                  navigation={navigation}
                  users={route.params.users}
                  id={news.id}
                  gambar={news.image}
                  judul={news.resume}
                  highlight={news.resume}
                  berita={news.content}
                  tanggal={news.start_date}
                  endtanggal={news.end_date}
                  kategori={news.kategori}
                />
              ),
          )}
        </View>
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
        <View style={{marginBottom: 30}} />
      </ScrollView>
    </View>
  );
};

export default BeritaPage;

const styles = StyleSheet.create({
  imageHeadline: {
    flex: 1,
    justifyContent: 'center',
    height: 240,
    width: '100%',
    marginTop: 20,
  },
  tipsHeadline: {
    borderRadius: 5,
    backgroundColor: '#C61E24',
    height: 30,
    width: 200,
    opacity: 0.6,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 60,
  },
  tipsHeadlineOrange: {
    borderRadius: 5,
    backgroundColor: '#F1B35599',
    height: 30,
    width: 200,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 60,
  },
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
    //alignItems: 'center',
    marginHorizontal: 20,
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
    fontSize: 20,
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
  tanggalHeadline: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginHorizontal: 20,
    position: 'absolute',
    bottom: 90,
  },
  tipsText: {
    color: '#FFFFFF',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginHorizontal: 30,
    position: 'absolute',
    bottom: 63,
  },
  opacityHeadline: {
    backgroundColor: '#000000',
    width: '100%',
    height: 120,
    position: 'absolute',
    bottom: 0,
    opacity: 0.2,
  },

  judulHeadline: {
    color: 'white',
    position: 'absolute',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginHorizontal: 20,
    bottom: 25,
  },
});
