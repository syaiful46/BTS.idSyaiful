import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
  AsyncStorage,
} from 'react-native';
import {ILogo, Slider, ILogoService} from '../../assets';
import {
  CardMenuBerita,
  CardDashboard,
  Circle,
  CircleAbu,
} from '../../components';
import config from '../../lib/configurations';

const DashboardKoordinator = ({navigation, route}) => {
  const [datas, setDatas] = useState([]);
  const [lokasi, setLokasi] = useState('');
  const [bannernya, setBannernya] = useState('');

  const getDataProfile = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        let text = JSON.parse(value);
        setBannernya(text.data.banner);
        setLokasi(text.data.lokasi_name);
        console.log(text.data);
        // alert(value);
      }
    } catch (error) {}
  };

  const getDataBerita = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        let text = JSON.parse(value);
        console.log(text);

        var myHeadersx = new Headers();
        myHeadersx.append('x-access-token', text.data.token);

        var requestOptions = {
          method: 'GET',
          headers: myHeadersx,
          redirect: 'follow',
        };

        fetch(config.api.host + '/info', requestOptions)
          .then(response => response.json())
          .then(json => {
            console.log(json);
            if (json.status == 200) {
              setDatas(json.data.iklan);
            }

            // alert('masuk gak');
          })
          .catch(error => console.log('error', error));
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    getDataBerita();
    getDataProfile();
  }, []);
  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{backgroundColor: 'white'}}>
            <View style={styles.imageContainer}>
              {(route.params.users == 'kor' ||
                route.params.users == 'user') && (
                <Image style={styles.logoAbsolute} source={ILogo} />
              )}
              {(route.params.users == 'korsn' ||
                route.params.users == 'usersn') && (
                <Image style={styles.logoService} source={ILogoService} />
              )}
            </View>
          </View>
          <View style={{height: 20}} />
          <View style={{alignItems: 'center', borderRadius: 10}}>
            <ImageBackground
              source={{uri: bannernya}}
              resizeMode="cover"
              imageStyle={{borderRadius: 10}}
              style={styles.imageHeadline}>
              <View style={styles.opacityHeadline} />
              <Text style={styles.judulHeadline}>{lokasi}</Text>
            </ImageBackground>
          </View>
          <View style={{height: 20}} />

          {(route.params.users == 'user' || route.params.users == 'usersn') && (
            <View>
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('AbsensiPage', {
                      users: route.params.users,
                    })
                  }>
                  <CardDashboard jenis={'absensi'} title={'Absensi'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('DashboardPageUser')}>
                  <CardDashboard jenis={'dashboard'} title={'Dashboard'} />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}} />

              <View style={styles.menuContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('BeritaPage', {
                      users: route.params.users,
                    })
                  }>
                  <CardDashboard jenis={'berita'} title={'Berita'} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          {(route.params.users == 'kor' || route.params.users == 'korsn') && (
            <View>
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('AbsensiPage', {
                      users: route.params.users,
                    })
                  }>
                  <CardDashboard jenis={'absensi'} title={'Absensi'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ApprovalPage', {
                      users: route.params.users,
                    })
                  }>
                  <CardDashboard jenis={'approval'} title={'Approval'} />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}} />
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DashboardPageKoordinator', {
                      users: route.params.users,
                    })
                  }>
                  <CardDashboard jenis={'dashboard'} title={'Report'} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('BeritaPage', {
                      users: route.params.users,
                    })
                  }>
                  <CardDashboard jenis={'berita'} title={'Berita'} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={[styles.berita, {marginLeft: '-12%'}]}>Berita</Text>

            <Text
              onPress={() =>
                navigation.navigate('BeritaPage', {
                  users: route.params.users,
                })
              }
              style={[styles.berita, {marginRight: '-12%'}]}>
              Lihat Semua
            </Text>
          </View>
          <View style={{marginBottom: 10}} />
          <View style={{alignItems: 'center'}}>
            {datas.map(
              (menews, index) =>
                index >= 0 && (
                  <CardMenuBerita
                    navigation={navigation}
                    route={route}
                    id={menews.id}
                    gambar={menews.image}
                    judul={menews.resume}
                    tanggal={menews.start_date}
                    berita={menews.content}
                    kategori={menews.kategori}
                  />
                ),
            )}
          </View>
          <View style={{marginBottom: 30}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardKoordinator;

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    marginTop: -20,
  },
  imageContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  logoService: {
    width: 214,
    height: 40,
    marginTop: 40,
  },
  logoAbsolute: {
    width: 192,
    height: 40,
    marginTop: 40,
  },
  imageHeadline: {
    flex: 1,
    justifyContent: 'center',
    height: 160,
    borderRadius: 10,
    width: 312,
  },
  judulHeadline: {
    color: 'white',
    position: 'absolute',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginHorizontal: 10,
    bottom: 10,
  },
  opacityHeadline: {
    backgroundColor: '#000000',
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    opacity: 0.2,
    borderRadius: 10,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  berita: {
    color: 'black',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    marginTop: 30,
  },
});
