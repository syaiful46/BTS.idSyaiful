import React from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

const InputText = ({title, users, value, onChangeText}) => {
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
          {color: '#000'},
        ]}
      />
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputBg: {
    borderRadius: 6,
    backgroundColor: '#FDEFEF',
    padding: 12,
    height: 65,
    width: width - 90,
    textAlignVertical: 'top',
  },
  inputBgOrange: {
    borderRadius: 6,
    backgroundColor: '#F1B35580',
    padding: 12,
    height: 65,
    width: width - 90,
    textAlignVertical: 'top',
  },
});
