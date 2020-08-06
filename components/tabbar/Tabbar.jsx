import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import Cart from '../pages/Cart';
import Search from '../pages/Search';
import Account from '../pages/Account';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import Swiggy from '../../Swiggy';
const Tab = createMaterialBottomTabNavigator();

export default function Tabbar() {
    return (
        <Tab.Navigator
        initialRouteName='Home'
        activeColor = '#f2802e'
        inactiveColor = '#d2d0d0'
        color='#f2802e'
        shifting={false}
        barStyle={{backgroundColor:'#fff',padding:10}}
      >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
          tabBarLabel:'Swiggy',
          tabBarIcon:({color})=>(
        <Swiggy color={color}/>
          ),
        }} />
        <Tab.Screen name="Search" component={Search} 
         options={{
          tabBarLabel:'Search',
          tabBarIcon:({color})=>(
            <AntDesign name="search1" size={24} color={color} />
          ),
        }}/>
        <Tab.Screen name="Cart" component={Cart}
         options={{
          tabBarLabel:'cart',
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons
          name='shopping'
          color={color}
          size={28} />
          ),
        }} />
        <Tab.Screen name="Account" component={Account}
         options={{
          tabBarLabel:'Account',
          tabBarIcon:({color})=>(
            <MaterialCommunityIcons
          name='account'
          color={color}
          size={28}
        />
          ),
        }} />
      </Tab.Navigator>
    
    )
}

const styles = StyleSheet.create({})
