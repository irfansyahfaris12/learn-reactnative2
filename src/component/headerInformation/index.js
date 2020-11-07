import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconDefaultUser, IconStadion} from '../../asset';

const HeaderInformation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.userInfo}>
        <IconDefaultUser />
        <View style={styles.textWraper}>
          <Text style={styles.hello}>Hello Bro</Text>
          <Text style={styles.username}>Faris</Text>
        </View>
      </View>
      <View style={styles.jadwalInfo}>
        <View style={styles.waktu}>
          <Text style={styles.jam}>19.00 WIB</Text>
          <Text style={styles.tanggal}>Sabtu, 01-12-2020</Text>
        </View>
        <View style={styles.iconJadwal}>
          <IconStadion />
          <Text style={styles.labelNext}>Next Jadwal</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderInformation;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
  },
  jadwalInfo: {
      flexDirection:"row",
  },
  iconJadwal:{
      alignItems:"center"
  },
  textWraper: {
    marginLeft: 9,
  },
  hello: {
    fontSize: 13,
    fontFamily: 'Poppins-Light',
  },
  username: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
  },
  waktu: {
    textAlign: 'left',
  },
  jam: {
    textAlign: 'right',
    fontSize: 11,
    fontFamily: 'Poppins-Bold',
  },
  tanggal: {
    textAlign: 'right',
    fontSize: 11,
    fontFamily: 'Poppins-Light',
  },
  labelNext:{
    fontSize: 11,
    fontFamily: 'Poppins-Light',
  }
});
