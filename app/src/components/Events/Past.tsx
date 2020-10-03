import React from 'react';
import {View, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';

const PAST = [
  require('../../assets/events/past_events/campus_soop_7.jpg'),
  require('../../assets/events/past_events/campus_soop_8.jpg'),
];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Past() {
  return (
    <ScrollView style={{}}>
      <View
        style={{
          flex: 1,
          width: windowWidth,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
        {PAST.map((img, idx) => {
          return (
            <Image
              style={{
                marginTop: '-10%',
                width: windowWidth,
                height: windowHeight,
                resizeMode: 'contain',
              }}
              key={idx}
              source={img}
            />
          );
        })}
      </View>
    </ScrollView>
  );
}
