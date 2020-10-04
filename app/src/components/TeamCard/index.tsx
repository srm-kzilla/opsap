import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

interface ITeamCardProps {
  image: object;
  name: string;
}

function TextCard(props: ITeamCardProps) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => Linking.openURL('mailto:v-atishay.jain@oneplus.com')}>
        <View style={styles.content}>
          <View style={styles.imageCont}>
            <Image source={props.image} style={styles.image} />
          </View>

          <View style={styles.textCont}>
            <Text style={styles.title}>{props.name}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '45%',
    height: 130,
    marginHorizontal: 5,
    marginTop: 40,
    marginBottom: 20,
    position: 'relative',

    backgroundColor: '#fafafa',
  },
  content: {
    top: '-30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageCont: {height: 100},
  image: {
    height: 120,
    width: 120,
    borderRadius: 10,

    resizeMode: 'cover',
  },
  textCont: {},
  title: {
    marginTop: 30,
    fontSize: 20,
    color: '#222',
    fontFamily: 'NeueHaasDisplay-Roman',
  },
});

export default TextCard;
