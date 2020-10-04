import React from 'react';
import {
  Text,
  Linking,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import SlideShow from '../components/Slideshow';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinkCard from '../components/LinkCard';
import HomeCard from '../components/HomeCard';

const LINKS = [
  {
    title: 'Jazz with OnePlus',
    subtitle: 'Listen to the awesome playlist on Spotify',
    image: require('../assets/spotify.png'),
    url:
      'https://open.spotify.com/playlist/1SeGoo6wWZFg4Kbz27475X?si=AZ-cyEL8Reuy7UMGYrwipQ',
  },
  {
    title: 'Cheese with OnePlus',
    subtitle: 'Follow OnePlus Student Ambassador Program’20 on Instagram',
    image: require('../assets/instagram.png'),
    url: 'https://www.instagram.com/oneplus_sap/?igshid=yeipvjydv0l7',
  },
  {
    title: 'OnePlus Community Forum',
    subtitle: '#OnePlusCommunity',
    image: require('../assets/oneplus.png'),
    url: 'https://forums.oneplus.com/forums/student-community/',
  },
];

const HOME_BANNER = [
  require('../assets/1.jpg'),
  require('../assets/2.jpeg'),
  require('../assets/3.jpg'),
  require('../assets/4.jpg'),
];

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{alignItems: 'center'}}>
      <ScrollView>
        <SlideShow images={HOME_BANNER} />
        <View style={styles.headCont}>
          <Text style={styles.heading}>OnePlus</Text>
          <Text style={styles.subheading}>Student Ambassador Program’20</Text>
        </View>

        <View
          style={{width: '100%', paddingHorizontal: 20, alignItems: 'center'}}>
          <HomeCard title="Explore Events" nav="Events">
            <View
              style={{
                height: '80%',
              }}>
              <Image
                style={{width: '100%', height: '100%', resizeMode: 'contain'}}
                source={require('../assets/events/banner.png')}
              />
            </View>
          </HomeCard>
          <LinkCard {...LINKS[2]} />
          <LinkCard {...LINKS[1]} />
          <HomeCard title="Gallery" nav="Gallery">
            <View
              style={{
                height: '80%',
              }}>
              <Text style={styles.subtitle}>"WARP Charge Yourself "</Text>
              <Image
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'cover',
                  // aspectRatio: 4,
                  marginTop: 5,
                }}
                source={require('../assets/gallery.jpg')}
              />
            </View>
          </HomeCard>
          <HomeCard title="Meet the Team" nav="Team">
            <View
              style={{
                height: '80%',
              }}>
              <Text style={styles.subtitle}>
                " TEAMWORK makes the DREAM WORK "
              </Text>
              <Image
                source={require('../assets/neversettle.png')}
                style={{
                  width: '100%',
                  flex: 1,
                }}
              />
            </View>
          </HomeCard>
          <LinkCard {...LINKS[0]} />

          <HomeCard title="Sounds Good, Let's Collab" nav="Collab">
            <Text style={styles.subtitle}> 1 + 1 = ∞ </Text>
            <Image
              source={require('../assets/SAP_Logo_Red.png')}
              style={{
                width: '100%',
                flex: 1,
                resizeMode: 'center',
              }}
            />
          </HomeCard>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headCont: {
    textAlign: 'left',
    width: '100%',
    padding: 10,
  },
  heading: {
    fontFamily: 'NeueHaasDisplay-Thin',
    fontSize: 32,
    textAlign: 'left',
    color: '#eb0029',
  },
  subheading: {
    fontSize: 24,
    fontFamily: 'NeueHaasDisplay-Thin',
  },
  subtitle: {
    fontFamily: 'NeueHaasDisplay-LightItalic',
    fontSize: 14,
  },
  hScroll: {
    display: 'flex',
    flexDirection: 'row',

    // backgroundColor: '#0ff',
  },
  hScrollItem: {
    backgroundColor: '#fefeff',
    marginHorizontal: 10,
    marginVertical: 25,

    borderLeftWidth: 6,
    borderColor: 'red',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 15,
  },
  navText: {
    fontSize: 24,
    height: 30,
    fontFamily: 'NeueHaasDisplay-Thin',
  },
});
