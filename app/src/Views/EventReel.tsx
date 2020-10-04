import * as React from 'react';
import {View, StyleSheet, Dimensions, Text} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import Upcoming from '../components/Events/Upcoming';
import OnGoing from '../components/Events/OnGoing';
import Past from '../components/Events/Past';
import Header from '../components/Header';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

// Structure from react-native-tab-view docs
const FirstRoute = () => (
  <View
    style={[
      styles.scene,
      {
        backgroundColor: '#efefef',
      },
    ]}>
    <Upcoming />
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, {backgroundColor: '##f2f0fd'}]}>
    <OnGoing />
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.scene, {backgroundColor: '#fafafa'}]}>
    <Past />
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Upcoming'},
    {key: 'second', title: 'On-going'},
    {key: 'third', title: 'Past'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <>
      <TabView
        sceneContainerStyle={{backgroundColor: '#000'}}
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
      />
    </>
  );
}
const renderTabBar = (props) => (
  <>
    <Header title="Events" />
    <TabBar
      {...props}
      renderLabel={({route, focused, color}) => (
        <Text style={{color: '#000', margin: 8}}>{route.title}</Text>
      )}
      indicatorStyle={{backgroundColor: 'red'}}
      style={{backgroundColor: 'transparent'}}
    />
  </>
);

const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
});
