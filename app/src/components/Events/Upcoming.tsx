import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';

const UPCOMING = [
  require('../../assets/events/upcoming_events/oxygen_os.jpg'),
  require('../../assets/events/upcoming_events/warp_charge.png'),
];
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Upcoming() {
  return (
    <ScrollView
    // contentContainerStyle={{alignItems: 'center'}}
    //   automaticallyAdjustContentInsets={false}
    // style={{flex: 1,flexWrap:"wrap"}}
    >
      {UPCOMING.map((img, idx) => {
        return <Card key={idx} img={img} />;
      })}
    </ScrollView>
  );
}

function Card(props) {
  return (
    <View
      style={{
        elevation: 1,
        marginVertical: 10,
      }}>
      <Image
        style={{
          width: 400,
          height: windowWidth / 2,
          // height: windowHeight/2,

          resizeMode: 'contain',
        }}
        source={props.img}
      />
    </View>
  );
}
