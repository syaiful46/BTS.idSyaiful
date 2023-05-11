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
import {ILogo, Slider, Oval, INotif, IProfile} from '../../assets';
import {
  CardMenuBerita,
  CardDashboard,
  Circle,
  CircleAbu,
  Block,
  BannerHome,
} from '../../components';
import storage from '../../lib/storage';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../../constants';
import {styles as blockStyles} from '../../components/Block';
import Icon from 'react-native-vector-icons/FontAwesome';
import config from '../../lib/configurations';

const DashboardKoordinator = ({navigation, route}) => {
  const [names, setNames] = useState('');
  const [datas, setDatas] = useState([]);
  const [niks, setNiks] = useState([]);
  const [ektps, setEktps] = useState('');
  const [birthdates, setBirthdates] = useState('');
  const [phones, setPhones] = useState('');
  const [photos, setPhotos] = useState('');
  const [emails, setEmails] = useState('');
  // const [jobdesk_ids, setJobdesk_ids] = useState('');
  const [alamats, setAlamats] = useState('');
  const [latitudes, setLatitudes] = useState('');
  const [longitudes, setLongitudes] = useState('');
  const getDataProfile = async () => {
    try {
      const value = await AsyncStorage.getItem('login');
      //alert(value)
      if (value !== null) {
        let text = JSON.parse(value);
        setNames(text.name);
        if (text.photo == null) {
          setPhotos(IProfile);
        }

        // alert(value);

        var myHeadersx = new Headers();
        myHeadersx.append('x-access-token', text.token);
        myHeadersx.append(
          'Cookie',
          'BNIS___utm_is1=T77jvMIx09DjyYR3LexCmYF2wCP9bJGBXviod7BKnGfdGM1FxkCS+mPOA4BcjNBCMViqsijbvv61Pszn59Q6xN1WvO9t/t6GKpNoWkQmaWc7prjNaTSzag==',
        );

        var requestOptions = {
          method: 'GET',
          headers: myHeadersx,
          redirect: 'follow',
        };

        fetch(config.api.host + '/getInfo', requestOptions)
          .then(response => response.json())
          .then(json => {
            //console.log(json.data[0].birthdate);
            setDatas(json.data);
            setPhotos(json.data[0].photo);
            setEktps(json.data[0].ektp);
            setBirthdates(json.data[0].birthdate);
            setPhones(json.data[0].phone);
            setAlamats(json.data[0].alamat);
            setLatitudes(json.data[0].latitude);
            setLongitudes(json.data[0].longitude);
            //alert(datas.birthdate)
            // alert(datas);
            //return json;
          })
          .catch(error => console.log('error', error));

        //get data lain for api
      }
    } catch (error) {}
  };

  useEffect(() => {
    getDataProfile();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: '#E5E5E5'}}>
      <View style={styles.headers}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Profile', {
              users: route.params.users,
            })
          }>
          <Image source={IProfile} style={styles.imageProfil} />
        </TouchableOpacity>
        <Image source={ILogo} style={styles.imageAbsensi} />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Notifikasi', {
              users: route.params.users,
            })
          }>
          <Image source={INotif} style={styles.imageNotif} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <ImageBackground
            source={Oval}
            resizeMode="contain"
            style={styles.imageBG}>
            {/* <View>
              <View style={styles.imageContainer}>
                <Image style={styles.logoService} source={ILogo} />
              </View>
            </View> */}
            <View style={{height: 50, backgroundColor: '#f8f8f8'}} />

            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#f8f8f8',
                marginBottom: -25,
              }}>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                <Image style={styles.logoProfile} source={{uri: photos}} />
              </TouchableOpacity>
              <Text style={styles.judulHeadline}>{names}</Text>
            </View>

            <View
              style={{marginTop: 5, height: 140, backgroundColor: '#f8f8f8'}}>
              <ScrollView
                style={{paddingTop: 20}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={{marginHorizontal: 10}}>
                  <BannerHome title="PENGUMUMAN" message="First Item" />
                </TouchableOpacity>
                <TouchableOpacity style={{marginHorizontal: 10}}>
                  <BannerHome title="PENGUMUMAN" message="Second Item" />
                </TouchableOpacity>
              </ScrollView>
            </View>

            <View style={{marginTop: 10}}>
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Absensi')}>
                  <CardDashboard jenis={'absensi'} title={'Absensi'} />
                  <LinearGradient
                    end={{x: 1, y: 0}}
                    style={styles.detail}
                    colors={[theme.colors.primary, theme.colors.accent]}>
                    <Block row right center>
                      <Text
                        size={12}
                        style={{marginRight: 10, color: '#ffffff'}}
                        color="white">
                        Detail
                      </Text>
                      <Icon
                        name="arrow-right"
                        size={24}
                        color="white"
                        style={{marginRight: 15}}
                      />
                    </Block>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Ketidakhadiran')}>
                  <CardDashboard
                    jenis={'ketidakhadiran'}
                    title={'Ketidakhadiran'}
                  />
                  <LinearGradient
                    end={{x: 1, y: 0}}
                    style={styles.detail}
                    colors={[theme.colors.primary, theme.colors.accent]}>
                    <Block row right center>
                      <Text
                        size={12}
                        style={{marginRight: 10, color: '#ffffff'}}
                        color="white">
                        Detail
                      </Text>
                      <Icon
                        name="arrow-right"
                        size={24}
                        color="white"
                        style={{marginRight: 15}}
                      />
                    </Block>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}} />
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SaldoPinjaman')}>
                  <CardDashboard jenis={'pinjaman'} title={'Pinjaman'} />
                  <LinearGradient
                    end={{x: 1, y: 0}}
                    style={styles.detail}
                    colors={[theme.colors.primary, theme.colors.accent]}>
                    <Block row right center>
                      <Text
                        size={12}
                        style={{marginRight: 10, color: '#ffffff'}}
                        color="white">
                        Detail
                      </Text>
                      <Icon
                        name="arrow-right"
                        size={24}
                        color="white"
                        style={{marginRight: 15}}
                      />
                    </Block>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('InformasiPage')}>
                  <CardDashboard jenis={'berita'} title={'Informasi'} />
                  <LinearGradient
                    end={{x: 1, y: 0}}
                    style={styles.detail}
                    colors={[theme.colors.primary, theme.colors.accent]}>
                    <Block row right center>
                      <Text
                        size={12}
                        style={{marginRight: 10, color: '#ffffff'}}
                        color="white">
                        Detail
                      </Text>
                      <Icon
                        name="arrow-right"
                        size={24}
                        color="white"
                        style={{marginRight: 15}}
                      />
                    </Block>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}} />
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Approval')}>
                  <CardDashboard jenis={'approval'} title={'Approval'} />
                  <LinearGradient
                    end={{x: 1, y: 0}}
                    style={styles.detail}
                    colors={[theme.colors.primary, theme.colors.accent]}>
                    <Block row right center>
                      <Text
                        size={12}
                        style={{marginRight: 10, color: '#ffffff'}}
                        color="white">
                        Detail
                      </Text>
                      <Icon
                        name="arrow-right"
                        size={24}
                        color="white"
                        style={{marginRight: 15}}
                      />
                    </Block>
                  </LinearGradient>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('DashboardPageKoordinator')
                  }>
                  <CardDashboard jenis={'dashboard'} title={'Dashboard'} />
                  <LinearGradient
                    end={{x: 1, y: 0}}
                    style={styles.detail}
                    colors={[theme.colors.primary, theme.colors.accent]}>
                    <Block row right center>
                      <Text
                        size={12}
                        style={{marginRight: 10, color: '#ffffff'}}
                        color="white">
                        Detail
                      </Text>
                      <Icon
                        name="arrow-right"
                        size={24}
                        color="white"
                        style={{marginRight: 15}}
                      />
                    </Block>
                  </LinearGradient>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
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
    marginTop: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    marginTop: -20,
  },
  imageContainer: {
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  imageProfil: {
    width: 35,
    height: 40,
    marginTop: 10,
    left: 10,
  },
  imageAbsensi: {
    width: 140,
    height: 30,
    marginTop: 15,
    right: 130,
    position: 'absolute',
  },
  imageNotif: {
    width: 28,
    height: 35,
    marginTop: 15,
    left: 310,
  },
  headers: {
    height: 60,
    backgroundColor: 'white',
    paddingLeft: 10,

    flexDirection: 'row',
  },
  logoService: {
    width: '40%',
    marginTop: 70,
  },
  imageHeadline: {
    flex: 1,
    justifyContent: 'center',
    height: 160,
    borderRadius: 10,
    width: 312,
  },
  judulHeadline: {
    color: '#000000',

    /* fontFamily: 'Poppins-Regular', */
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 20,
  },
  opacityHeadline: {
    backgroundColor: '#000000',
    width: '100%',
    height: 60,
    position: 'absolute',
    bottom: 0,
    opacity: 0.2,
  },
  circleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  berita: {
    color: 'black',
    /*  fontFamily: 'Poppins-Regular', */
    fontSize: 16,
    marginTop: 30,
  },
  imageBG: {
    width: '100%',
  },
  logoProfile: {
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#000000',
    width: 120,
    height: 120,
    marginTop: 20,
    marginBottom: 10,
  },
  detail: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    color: 'white',
  },
});
