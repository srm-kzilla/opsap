import React from 'react';
import {Text, Linking, StyleSheet, View, ScrollView} from 'react-native';
import SlideShow from '../components/Slideshow';

import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import TeamCard from '../components/TeamCard';
import Header from '../components/Header';
import ImageGrid from '../components/ImageGrid';
export default function TeamScreen() {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Header title="Gallery" />
      <ImageGrid />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
