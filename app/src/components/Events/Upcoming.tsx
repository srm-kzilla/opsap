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
  require('../../assets/events/upcoming_events/oxygen_os.jpg'),
  require('../../assets/events/upcoming_events/oxygen_os.jpg'),
  require('../../assets/events/upcoming_events/oxygen_os.jpg'),
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
      <View style={{alignItems: 'center'}}>
        {UPCOMING.map((img, idx) => {
          return <Card key={idx} img={img} />;
        })}
      </View>
    </ScrollView>
  );
}

function Card(props) {
  return (
    <View
      style={{
        elevation: 1,
        margin: 5,
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        width: '95%',
      }}>
      <Image
        style={{
          width: '100%',
          height: windowHeight / 4,

          resizeMode: 'contain',
        }}
        source={props.img}
      />
      <Text style={styles.heading}>
        OnePlus 8T: Experience OxygenOS 11 out of the box.
      </Text>
      <Text style={styles.subHeading}>by Pete 2020-09-29</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    color: '#666',
    fontWeight: '700',
    fontSize: 14,
    fontFamily: 'NeueHaasDisplay-Roman',
    marginVertical: 3,
  },
  subHeading: {
    color: '#aaa',
    fontWeight: '400',
    fontFamily: 'NeueHaasDisplay-Roman',
    fontSize: 12,
  },
});
