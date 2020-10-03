import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?mobile',
        'https://source.unsplash.com/1024x768/?software',
        'https://source.unsplash.com/1024x768/?earphones',
        'https://source.unsplash.com/1024x768/?gaming',
        'https://source.unsplash.com/1024x768/?tech',
        // require('./assets/images/girl.jpg'),
      ],
    };
  }

  state = {images: []};

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          autoplay
          dotStyle={{
            display: 'none',
          }}
          sliderBoxHeight={200}
          circleLoop
          images={this.state.images}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {height: 200},
});
