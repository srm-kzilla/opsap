import React from 'react';
import {View, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';

const ON_GOING = [
  require('../../assets/events/on_going_events/unbox_4.jpg'),
  require('../../assets/events/on_going_events/unbox_5.jpg'),
  require('../../assets/events/on_going_events/unbox_6.jpg'),
];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function OnGoing() {
  return (
    <ScrollView style={{}}>
      <View
        style={{
          flex: 1,
          width: windowWidth,
          flexDirection: 'column',
          alignItems: 'stretch',
        }}>
        {ON_GOING.map((img, idx) => {
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
