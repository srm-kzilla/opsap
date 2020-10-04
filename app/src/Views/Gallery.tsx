import React from 'react';
import {Text, Linking, StyleSheet, View, ScrollView, Image} from 'react-native';
import SlideShow from '../components/Slideshow';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import TeamCard from '../components/TeamCard';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
export default function TeamScreen() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Header title="Gallery" />
      <ScrollView>
        <View
          style={{
            height: 700,
          }}>
          <Image
            style={StyleSheet.flatten([
              {width: '100%', resizeMode: 'cover', height: 400},
            ])}
            source={require('../assets/gallery/3.jpg')}
          />
          <Image
            style={StyleSheet.flatten([
              styles.borderRed,
              {
                width: '100%',
                resizeMode: 'cover',
                height: 400,
                top: -200,
                right: -100,
              },
            ])}
            source={require('../assets/gallery/2.jpg')}
          />
          <Image
            style={StyleSheet.flatten([
              styles.borderCyan,
              {
                width: '90%',
                resizeMode: 'cover',
                height: 300,
                top: -400,
                left: -50,
              },
            ])}
            source={require('../assets/gallery/1.jpg')}
          />
        </View>
        <ImageGrid />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  borderRed: {
    borderWidth: 2,
    borderColor: 'red',
  },
  borderCyan: {
    borderWidth: 2,
    borderColor: 'cyan',
  },
});
