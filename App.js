import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import Tabbar from './components/tabbar/Tabbar.jsx';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  console.disableYellowBox = 'true';
  return (
    <>
    <StatusBar style='dark' backgroundColor='white'/>
    <NavigationContainer>
     <Tabbar />
    </NavigationContainer>
    </>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
