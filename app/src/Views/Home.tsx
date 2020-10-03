import React from 'react';
import {Text, Linking, StyleSheet, View} from 'react-native';
import SlideShow from '../components/Slideshow';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import LinkCard from '../components/LinkCard';

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

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <SlideShow />
      <View style={styles.headCont}>
        <Text style={styles.heading}>OnePlus</Text>
        <Text style={styles.subheading}>Student Ambassador Program’20</Text>
      </View>
      {LINKS.map((elm, idx) => (
        <LinkCard {...elm} key={idx} />
      ))}
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
    fontSize: 32,
    textAlign: 'left',
    color: '#eb0029',
  },
  subheading: {
    fontSize: 24,
  },
});
