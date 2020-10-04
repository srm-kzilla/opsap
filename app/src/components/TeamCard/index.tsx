import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

function TextCard(props) {
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
    height: 120,
    marginTop: 40,
    position: 'relative',
  },
  content: {
    top: '-30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageCont: {height: 100},
  image: {
    height: 100,
    width: 100,
    borderRadius: 200,
    borderWidth: 1,
    borderColor: 'red',
    resizeMode: 'cover',
  },
  textCont: {},
  title: {
    marginTop: 5,
    fontSize: 20,
    color: '#222',
    fontFamily: 'NeueHaasDisplay-Roman',
  },
});

export default TextCard;
