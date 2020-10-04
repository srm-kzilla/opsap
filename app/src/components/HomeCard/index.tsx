import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

interface IHomeCardProps {
  nav: string;
  title: string;
  children: React.ReactChild;
}

export default function HomeCard(props: IHomeCardProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.cardCont}
      onPress={() => navigation.navigate(props.nav)}>
      <Text style={styles.title}>{props.title}</Text>
      <Icon style={styles.icon} name="arrowright" size={20} />
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
    position: 'relative',

    justifyContent: 'center',
  },
  icon: {
    right: 0,
    bottom: 0,
    position: 'absolute',
    zIndex: 2,
  },
  title: {
    fontSize: 28,
    fontFamily: 'NeueHaasDisplay-Roman',
  },
});
