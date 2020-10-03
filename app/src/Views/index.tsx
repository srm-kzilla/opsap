import * as React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Text, View} from 'react-native';
import HomeScreen from './Home';
import TeamScreen from './Team';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
      <Text>Setting This is top text.</Text>
      <Text>This is bottom text.</Text>
    </SafeAreaView>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#eb0029',
      }}>
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Gallery"
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="picture" color={color} size={size} />
          ),
        }}
        component={SettingsScreen}
      />
      <Tab.Screen
        name="Team"
        options={{
          tabBarLabel: 'Meet the team',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="team" color={color} size={size} />
          ),
        }}
        component={TeamScreen}
      />
      <Tab.Screen
        name="Event"
        options={{
          tabBarLabel: 'Event',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="calendar" color={color} size={size} />
          ),
        }}
        component={SettingsScreen}
      />
      <Tab.Screen
        name="Collab"
        options={{
          tabBarLabel: 'Collab',
          tabBarIcon: ({color, size}) => (
            <AntDesign name="addusergroup" color={color} size={size} />
          ),
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return <MyTabs />;
}
