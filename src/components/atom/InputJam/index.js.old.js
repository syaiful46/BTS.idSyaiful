import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Jam} from '../../../assets';
import DateTimePicker from '@react-native-community/datetimepicker';
import Moment from 'moment';

var width = Dimensions.get('window').width;

const InputJam = ({title, users, onChange}) => {
  const [isPickerShow, setIsPickerShow] = useState(false);
  const [date, setDate] = useState(new Date(Date.now()));

  const showPicker = () => {
    setIsPickerShow(true);
  };

  const onChangex = (event, value) => {
    setDate(value);
    //if (Platform.OS === 'android') {
    setIsPickerShow(false);
    //}
    onChange(value);
  };

  return (
    <View>
      {isPickerShow && (
        <DateTimePicker
          value={date}
          mode={'time'}
          //display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          display={'default'}
          is24Hour={true}
          onChange={onChangex}
          style={styles.datePicker}
        />
      )}
      <View style={styles.container}>
        <TextInput
          placeholder={title}
          editable={false}
          style={
            users === 'korsn' || users === 'kor'
              ? styles.inputBg
              : styles.inputBgOrange
          }
          value={Moment(date).format('HH:mm')}
        />
        <TouchableOpacity style={styles.imageStyle} onPress={showPicker}>
          <Image source={Jam} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InputJam;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 9,
    borderColor: '#ADADAD',
    width: width - 100,
    backgroundColor: 'white',
    padding: 12,
  },
  inputBg: {
    borderRadius: 6,
    width: width - 90,
    backgroundColor: '#FDEFEF',
    padding: 12,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#0B1A47',
  },
  inputBgOrange: {
    borderRadius: 6,
    width: width - 90,
    backgroundColor: '#F1B35580',
    padding: 12,
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#0B1A47',
  },
  container: {
    flexDirection: 'row',
  },
  imageStyle: {
    marginTop: 5,
    position: 'absolute',
    right: 0,
  },
  datePicker: {
    width: 320,
    height: 260,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
});
