import React from 'react';
import {StyleSheet, View, Text, TextInput, Dimensions} from 'react-native';

var width = Dimensions.get('window').width;

const Input = ({title, password, bg, value, onChangeText, users}) => {
  return (
    <View>
      {bg != 'bg' && <Text style={styles.titleInput}>{title}</Text>}
      <TextInput
        secureTextEntry={password == true ? true : false}
        placeholder={title}
        value={value}
        onChangeText={onChangeText}
        style={
          bg == 'bg'
            ? users === 'korsn' || users === 'usersn'
              ? styles.inputBgOrange
              : styles.inputBg
            : styles.input
        }
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#ADADAD',
    width: width - 100,
    backgroundColor: 'white',
    padding: 12,
    color: '#000000',
  },
  inputBg: {
    borderRadius: 6,
    backgroundColor: '#FDEFEF',
    color: '#000000',
    padding: 12,
  },
  inputBgOrange: {
    borderRadius: 6,
    backgroundColor: '#F1B35580',
    color: '#000000',
    padding: 12,
  },
  titleInput: {
    color: '#023045',
    fontSize: 18,
    marginBottom: 6,
    marginTop: 20,
  },
});
