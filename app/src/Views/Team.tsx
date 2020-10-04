import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import TeamCard from '../components/TeamCard/';
import Header from '../components/Header';

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
      <Header title="Meet the Team" />
      <ScrollView style={{}}>
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
  teamCont: {
    backgroundColor: '#efefef',
    paddingTop: 50,
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '5%',
    flex: 1,
  },
});
