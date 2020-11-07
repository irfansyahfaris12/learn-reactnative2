import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {ImageBanner} from '../../asset';
import {HeaderInformation, Klub, Layanan, SmallButton, UpdateScore} from '../../component';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layanan: 'booking',
    };
  }

  clickLayanan(value) {
    this.setState({
      layanan: value,
    });
  }

  render() {
    return (
      <View style={styles.page}>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <View style={styles.wrapHeader}>
            <HeaderInformation />
            <Image source={ImageBanner} style={styles.banner} />
          </View>
          <View style={styles.wrapLabel}>
            <Text style={styles.label}>
              Ayooo <Text style={styles.textBold}>Futsall</Text>
            </Text>
          </View>
          <View style={styles.layanan}>
            <Layanan
              title="Paket Langganan"
              onPress={() => this.clickLayanan('paket')}
              active={this.state.layanan === 'paket' ? true : false}
            />
            <Layanan
              title="Booking Lapangan"
              onPress={() => this.clickLayanan('booking')}
              active={this.state.layanan === 'booking' ? true : false}
            />
            <Layanan
              title="Join Team"
              onPress={() => this.clickLayanan('join')}
              active={this.state.layanan === 'join' ? true : false}
            />
          </View>
          <View style={styles.labelSparing}>
            <Text style={styles.label}>
              Pilih Team <Text style={styles.textBold}>Tanding </Text>
              Kamu
            </Text>
            <SmallButton text="Lihat semua" />
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.klub}>
                <Klub klub="An-Nahl FA" statistik="WWWDDDD" />
                <Klub klub="Vamos FC" statistik="WWWWWW" />
                <Klub klub="VE FC" statistik="WWDDLL" />
                <Klub klub="Arsyil FC" statistik="DDWDDDD" />
                <Klub klub="Awang Long FA" statistik="WWLDDDD" />
              </View>
            </ScrollView>
          </View>
          <View style={styles.labelSparing}>
            <Text style={styles.label}>
              Update <Text style={styles.textBold}>Score</Text>
            </Text>
            <SmallButton text="Lihat semua" />
          </View>
          <View style={styles.wrapperScroll}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <View style={styles.score}>
              <UpdateScore
                  klub1="An-Nahl FA"
                  klub2="Vamos FC"
                  score1="5"
                  score2="2"
                  date="Rabu, 1 Juli 2020 19.00 WIB"
                />
                <UpdateScore
                  klub1="VE FC"
                  klub2="Arsyil FC"
                  score1="7"
                  score2="4"
                  date="Kamis, 2 Juli 2020 19.00 WIB"
                />
                <UpdateScore
                  klub1="Bogor FC"
                  klub2="Awang Long FA"
                  score1="1"
                  score2="4"
                  date="Kamis, 2 Juli 2020 19.00 WIB"
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  wrapHeader: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  banner: {
    marginTop: windowHeight * 0.017,
    width: '100%',
    height: windowHeight * 0.14,
  },
  wrapLabel: {
    paddingHorizontal: 30,
    marginTop: 14,
  },
  label: {
    fontSize: 18,
    fontFamily: 'Poppins-Light',
  },
  textBold: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
  },
  layanan: {
    marginTop: windowHeight * 0.035,
    flexDirection: 'row',
    paddingHorizontal: 30,
    justifyContent: 'space-between',
  },
  labelSparing: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginTop: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  klub: {
    marginTop: 10,
    flexDirection: 'row',
  },
  wrapperScroll: {
    paddingHorizontal: 30,
  },
  score: {
    marginTop: 10,
    flexDirection: 'row',
  },
});
