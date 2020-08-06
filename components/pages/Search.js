import React from 'react'
import { StyleSheet, Text, View,TextInput,TouchableWithoutFeedback, Keyboard,FlatList,TouchableOpacity} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'

const DATA = [
  {
    id: '1',
    title: 'Baskin Robbins',
  },
  {
    id: '2',
    title: 'Chowdhary Sweets',
  },
  {
    id: '3',
    title: 'Bake Brown',
  },
];


function Search() {

    return (
      <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={{backgroundColor:'white',flex:1}}>
      <View style={{marginHorizontal:14}}>
      <View style={{borderWidth:1,borderColor:'gray',marginTop:40,borderRadius:5}}>
        <TextInput placeholder="Search for restaurants and food" placeholderTextColor="grey" style={{padding:15,fontSize:18,fontWeight:'600',letterSpacing:0.1,opacity:0.8}}/>
      </View>
      <View>
        <Text style={{fontWeight:'bold',fontSize:20,paddingTop:5}}>Recent Searches</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) =>(
          <>
          <TouchableOpacity style={{flexDirection:'row',width:'100%',borderBottomWidth:0.1,borderBottomStartRadius:45}} onPress={()=>console.log(item.title)}>
            <MaterialCommunityIcons name='magnify' size={28} style={{paddingTop:20,opacity:0.5,paddingBottom:20}}/>
          <Text style={{fontSize:16,paddingTop:20,paddingLeft:15,opacity:0.3,paddingBottom:20}} >{item.title}</Text>
          </TouchableOpacity>
          </>
        )}
      />
      </View>
      </View>
      </TouchableWithoutFeedback>
    )
}

export default Search;