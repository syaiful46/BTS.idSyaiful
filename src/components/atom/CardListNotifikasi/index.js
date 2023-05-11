import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {Cancel, Approve, Map, Info, Calendar} from '../../../assets';

const CardListNotifikasi = ({
  headline,
  pesan,
  isi,
  isi2,
  tanggal,
  menu_id,
  menu_name,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: 335,
        height: 95,
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
      }}>
      <View style={{flexDirection: 'column', alignSelf: 'stretch'}}>
        <Text
          style={{
            fontSize: 19,
            fontWeight: 'bold',
            marginTop: 5,

            color: '#0B1A47',
          }}>
          {headline}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '700', color: '#0B1A47'}}>
          {pesan}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '700', color: '#0B1A47'}}>
          {isi}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '700', color: '#0B1A47'}}>
          {isi2}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'column',
          alignSelf: 'stretch',
          position: 'absolute',
          marginLeft: 280,
          marginTop: 10,
          color: '#0B1A47',
        }}>
        <Text style={{fontSize: 14, fontWeight: '600'}}>{tanggal}</Text>
      </View>
    </View>
  );
};

export default CardListNotifikasi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
