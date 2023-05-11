import React from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

const InputMulti = ({title, users, value, onChangeText}) => {
  return (
    <View>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        multiline={true}
        maxLength={500}
        style={[
          users === 'korsn' || users === 'usersn' || users === 'kdc'
            ? styles.inputBgOrange
            : styles.inputBg,
          {color: 'black'},
        ]}
      />
    </View>
  );
};

export default InputMulti;

const styles = StyleSheet.create({
  inputBg: {
    borderRadius: 6,
    backgroundColor: '#FDEFEF',
    padding: 12,
    height: 50,
    textAlignVertical: 'top',
  },
  inputBgOrange: {
    borderRadius: 6,
    backgroundColor: '#F1B35580',
    padding: 12,
    height: 50,
    textAlignVertical: 'top',
  },
});
