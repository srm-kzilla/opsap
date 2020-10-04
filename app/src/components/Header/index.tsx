import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.headCont}>
      <Text style={styles.heading}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headCont: {
    textAlign: 'left',
    width: '100%',
    padding: 10,
  },
  heading: {
    fontSize: 32,
    textAlign: 'left',
    color: '#eb0029',
    fontFamily: 'NeueHaasDisplay-Bold',
  },
});
