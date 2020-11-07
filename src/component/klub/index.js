import React from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import { SmallButton } from '../'
import {
  LogoAnnahl,
  LogoVamos,
  LogoVeFC,
  LogoAwang,
  LogoArsyil,
} from '../../asset';

const Klub = ({klub, statistik}) => {
  const Logo = () => {
    if (klub === 'An-Nahl FA')
      return <Image source={LogoAnnahl} style={styles.logo} />;

    if (klub === 'Vamos FC')
      return <Image source={LogoVamos} style={styles.logo} />;

    if (klub === 'VE FC')
      return <Image source={LogoVeFC} style={styles.logo} />;

    if (klub === 'Awang Long FA')
      return <Image source={LogoAwang} style={styles.logo} />;

    if (klub === 'Arsyil FC')
      return <Image source={LogoArsyil} style={styles.logo} />;

    return <Image source={LogoArsyil} style={styles.logo} />;
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Logo />
      <Text style={styles.text}>{klub}</Text>
      <View style={styles.statistik}>
        <SmallButton text={statistik} />
      </View>
    </TouchableOpacity>
  );
};

export default Klub;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginRight: 10,
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
        marginBottom : 15,
      },
      logo: {
        width: 52,
        height: 52,
      },
      text: {
          fontSize: 10,
          fontFamily: 'Poppins-Bold'
      },
      statistik: {
          position: 'absolute',
          bottom: -15
      }
});
