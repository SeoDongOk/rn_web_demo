import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Dummy} from '../components/dummy';
import {NavigationContainer} from '@react-navigation/native';
// import MaterialCommunityIcons from 'react-native-vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
        }}>
        <Tab.Screen
          name="Feed"
          component={Dummy}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Dummy}
          options={{
            tabBarLabel: 'Updates',
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Dummy}
          options={{
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;
