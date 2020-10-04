import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function HomeCard(props) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardCont}
      onPress={() => navigation.navigate(props.nav)}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardCont: {
    backgroundColor: '#fff',
    borderLeftWidth: 10,
    borderColor: 'red',
    height: 300,
    width: '100%',
    marginVertical: 20,
    display: 'flex',
    paddingVertical: 15,
    paddingHorizontal: 8,

    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontFamily: 'NeueHaasDisplay-Roman',
  },
});
