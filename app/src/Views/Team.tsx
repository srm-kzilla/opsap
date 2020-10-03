import React from 'react';
import {Text, Linking, StyleSheet, View, ScrollView} from 'react-native';
import SlideShow from '../components/Slideshow';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import TeamCard from '../components/TeamCard/';

const TEAM = [
  {
    name: 'Advait Karmakar',
    image: require('../assets/team/Advait-Karmakar.jpg'),
  },
  {
    name: 'Atishay Jain',
    image: require('../assets/team/Atishay-Jain.jpeg'),
  },
  {
    name: 'Dev Sabharwal',
    image: require('../assets/team/Dev-Sabharwal.jpg'),
  },
  {
    name: 'Dhruv Shetty',
    image: require('../assets/team/Dhruv-Shetty.jpg'),
  },
  {
    name: 'Kaashvi Saxena',
    image: require('../assets/team/Kaashvi-Saxena.jpeg'),
  },
  {
    name: 'Pratyush Agarwal',
    image: require('../assets/team/Pratyush-Agarwal.jpg'),
  },
  {
    name: 'Sarthak Soral',
    image: require('../assets/team/Sarthak-Soral.jpg'),
  },
  {
    name: 'Suparna Mukherji',
    image: require('../assets/team/Suparna-Mukherji.jpg'),
  },
];

export default function TeamScreen() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.headCont}>
        <Text style={styles.heading}>Meet the Team</Text>
      </View>
      <ScrollView>
        <View style={styles.teamCont}>
          {TEAM.map((elm, idx) => {
            return <TeamCard key={idx} {...elm} />;
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headCont: {
    textAlign: 'left',
    width: '100%',
  },
  heading: {
    fontSize: 32,
    textAlign: 'left',
    color: '#eb0029',
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  subheading: {
    fontSize: 24,
  },
  teamCont: {
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',

    flex: 1,
  },
});
