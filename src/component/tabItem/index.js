import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { WARNA_SEKUNDER, WARNA_UTAMA } from '../../utils/constant'
import { IconHome,
    IconHomeActive,
    IconJadwal,
    IconJadwalActive,
    IconUser,
    IconUserActive,
    IconDefaultUser,
    IconStadion,
    IconBooking,
    IconLangganan,
    IconJoinTeam } from '../../asset'

const TabItem = ({ label, onLongPress, onPress, isFocused }) => {

    const Icon = () => {
        if(label === 'Home'){
            return isFocused ? <IconHomeActive /> : <IconHome/>
        }
        if(label === 'Jadwal'){
            return isFocused ? <IconJadwalActive /> : <IconJadwal/>
        }
        if(label === 'Akun'){
            return isFocused ? <IconUserActive /> : <IconUser/>
        }
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            onLongPress={onLongPress}
            style={isFocused ? styles.containerFocus : styles.container}
          >
              <Icon />
              {isFocused && <Text style={styles.text}>
              {label.toUpperCase()}
            </Text>}
            
          </TouchableOpacity>
    )
}

export default TabItem

const styles = StyleSheet.create({
    container:{
        alignContent:'center',
        padding: 5
    },
    containerFocus:{
        alignContent:'center',
        padding: 5,
        backgroundColor: WARNA_SEKUNDER,
        borderRadius:10,
        flexDirection: 'row'        
    },
    text:{
        color: WARNA_UTAMA,
        fontSize:18,
        marginLeft:8,
        fontFamily: 'Poppins-Bold'
    }
})
