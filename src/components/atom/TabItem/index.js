import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Home, IconProfile, Notification} from '../../../assets';

const TabItem = type => {
  const Icons = () => {
    if (type === 'home') {
      return <Home />;
    }
    if (type === 'profile') {
      return <IconProfile />;
    }
    if (type === 'notification') {
      return <Notification />;
    }
    return <Home />;
  };
  return (
    <View>
      <Icons />
      <Text>test</Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({});
