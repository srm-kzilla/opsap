import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
} from 'react-native';

interface ILinkCardProps {
  url: string;
  image: object;
  title: string;
  subtitle: string;
}

function LinkCard(props: ILinkCardProps) {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(props.url)}>
      <View style={styles.container}>
        <View style={styles.imageCont}>
          <Image source={props.image} style={styles.image} />
        </View>
        <View style={styles.divider} />
        <View style={styles.textCont}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subTitle}>{props.subtitle}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: '100%',
    backgroundColor: '#fcfcfc',
    marginVertical: 2,

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    elevation: 1,
  },
  divider: {
    width: StyleSheet.hairlineWidth,
    height: '50%',
    backgroundColor: '#000',
  },
  imageCont: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: '100%',
  },
  image: {
    resizeMode: 'center',
    width: '80%',
  },
  textCont: {
    flex: 4,

    justifyContent: 'center',
    paddingHorizontal: '5%',
  },
  title: {
    fontSize: 14,
    fontFamily: 'NeueHaasDisplay-Roman',
  },
  subTitle: {
    fontSize: 12,
    color: '#111',
    fontFamily: 'NeueHaasDisplay-Light',
  },
});

export default LinkCard;
