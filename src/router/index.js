import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Login,
  DashboardKoordinator,
  BeritaPage,
  ChecklistPage,
  TambahChecklist,
  Profile,
  ChecklistHapus,
  Daftar,
} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from '../components';
import {Image, AsyncStorage, View} from 'react-native';
import {Home, IconProfile, Notification} from '../assets/';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = props => {
  const [gambarsPro, setGambarsPro] = useState('');
  const getDataBerita = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        let text = JSON.parse(value);
        //console.log(text.data.photo);
        //return text.data.photo;
        setGambarsPro(text.data.photo);

        //alert(gambarsPro);
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    getDataBerita();
  }, []);

  //imgx = '';
  return (
    <Tab.Navigator tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="DashboardKoordinator"
        component={DashboardKoordinator}
        initialParams={{users: props.route.params}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Home}
              style={
                props.route.params === 'korsn'
                  ? {
                      width: 35,
                      height: 35,
                      tintColor: focused ? 'darkorange' : '#748c94',
                    }
                  : {
                      width: 35,
                      height: 35,
                      tintColor: focused ? 'red' : '#748c94',
                    }
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        initialParams={{users: props.route.params}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={{uri: gambarsPro}}
              style={
                props.route.params === 'korsn'
                  ? {
                      width: 50,
                      height: 50,
                      borderWidth: 3,
                      borderRadius: 100,
                      borderColor: focused ? 'darkorange' : '#748c94',
                    }
                  : {
                      width: 50,
                      height: 50,
                      borderWidth: 3,
                      borderRadius: 100,
                      borderColor: focused ? 'red' : '#748c94',
                    }
              }
            />
          ),
        }}
      />
      <Tab.Screen
        name="BeritaPage"
        component={BeritaPage}
        initialParams={{users: props.route.params}}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Image
              source={Notification}
              style={
                props.route.params === 'korsn'
                  ? {
                      width: 35,
                      height: 35,
                      tintColor: focused ? 'darkorange' : '#748c94',
                    }
                  : {
                      width: 35,
                      height: 35,
                      tintColor: focused ? 'red' : '#748c94',
                    }
              }
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Daftar"
        component={Daftar}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TambahChecklist"
        component={TambahChecklist}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChecklistPage"
        component={ChecklistPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChecklistHapus"
        component={ChecklistHapus}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="DashboardKoordinator"
        component={DashboardKoordinator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BeritaPage"
        component={BeritaPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
{
  /* <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}> */
}
