import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {SliderBox} from 'react-native-image-slider-box';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: props.images,
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
  container: {width: '100%'},
});
