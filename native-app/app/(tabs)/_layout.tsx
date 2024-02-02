import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Pressable, useColorScheme} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../../constants/Colors';
import React from 'react';
import StateScreen from '.';
import TabTwoScreen from './two';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{marginBottom: -3}} {...props} />;
}

const Tab = createBottomTabNavigator();

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}
    >
      <Tab.Screen
        name='index'
        component={StateScreen}
        options={{
          title: 'Machine State',
          tabBarIcon: ({color}) => <TabBarIcon name='list-ul' color={color} />,
        }}
      />
      <Tab.Screen
        name='two'
        component={TabTwoScreen}
        options={{
          title: 'Log Part',
          tabBarIcon: ({color}) => <TabBarIcon name='edit' color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
