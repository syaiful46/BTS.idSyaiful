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
  const [lokasiID, setLokasiID] = useState('');

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
              source={ILogo}
              resizeMode="contain"
              imageStyle={{borderRadius: 10}}
              style={styles.imageHeadline}>
              <View style={styles.opacityHeadline} />
              <Text style={styles.judulHeadline}>{lokasi}</Text>
            </ImageBackground>
          </View>
          <View style={{height: 20}} />

          {(route.params.users == 'kor' || route.params.users == 'korsn') && (
            <View>
              <View style={styles.menuContainer}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('ChecklistPage', {
                      users: route.params.users,
                    })
                  }>
                  <CardDashboard jenis={'approval'} title={'Checklist'} />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: 20}} />
            </View>
          )}

          <View style={{marginBottom: 10}} />

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
    marginTop: 50,
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
    width: 80,
    height: 70,
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
