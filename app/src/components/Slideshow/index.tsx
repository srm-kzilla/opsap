// Lib docs demo
import React, {Component, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

interface ISliderProps {
  images: object[];
}

export default function Slider(props: ISliderProps) {
  const [images, setImage] = useState(props.images);

  return (
    <View style={styles.container}>
      <SliderBox
        autoplay
        dotStyle={{
          display: 'none',
        }}
        sliderBoxHeight={200}
        circleLoop
        images={images}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {width: '100%'},
});
