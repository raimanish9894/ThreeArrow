import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import StartScreen from './StartScreen';
import SettingScreen from './SettingScreen';
import HomeScreen from './HomeScreen';
import EmptyScreen from './EmptyScreen';

import plus from '../assets/plus.png';
import home from '../assets/home.png';
import setting from '../assets/setting.png';
import { FontAwesome5 } from '@expo/vector-icons';

const RootStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={{ headerShown: false }} tabBarOptions={{
            showLabel: false,
            
            style: {
              backgroundColor: 'white',
              position: 'absolute',
              bottom: 40,
              marginHorizontal: 20,
              
              height: 60,
              borderRadius: 10,
              
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowOffset: {
                width: 10,
                height: 10
              },
              paddingHorizontal: 20,
            }
          }}>

            <Tab.Screen name={"Home"} component={HomeScreen} options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                 
                  position: 'absolute',
                  top: 20
                }}>
                  <Image
                   source={home}
                   style={{width:19.8,height:22.57}}
                    color={focused ? '#49A6FC' : '#161616'}
                  />
                </View>
              )
            }}></Tab.Screen>
    

    
            <Tab.Screen name={"ActionButton"} component={EmptyScreen} options={{
              tabBarIcon: ({ focused }) => (
    
                <TouchableOpacity>
                  <View style={{
                    width: 55,
                    height: 55,
                    backgroundColor: '#49A6FC',
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: Platform.OS == "android" ? 50 : 30
                  }}>
                    <Image source={plus} style={{
                      width: 22,
                      height: 22,
                      tintColor: 'white',
                    }}></Image>
                  </View>
                </TouchableOpacity>
              )
            }}></Tab.Screen>

            <Tab.Screen name={"Setting"} component={SettingScreen} options={{
              tabBarIcon: ({ focused }) => (
                <View style={{
                  
                  position: 'absolute',
                  top: 20
                }}>
                  <Image
                    source={setting}
                    color={focused ? '#49A6FC' : '#161616'}
                  />
                </View>
              )
            }}></Tab.Screen>
    
          </Tab.Navigator>
    );
};


const RootStackScreen = ({navigation}) => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
   
    <RootStack.Screen name="Start" component={StartScreen} />

    <RootStack.Screen name="first" component={TabNavigator} />
    
  </RootStack.Navigator>
  )
}

export default RootStackScreen