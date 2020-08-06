import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import { TouchableOpacity } from 'react-native-gesture-handler';

const {width,height} = Dimensions.get('window')

const Break=({widthb})=>{
  return(
    <View style={{borderBottomWidth:widthb,paddingTop:0,borderBottomColor:'black'}}><Text></Text></View>
  )
}


function Account() {

    return (
      <>
      <View style={{ flex: 1,backgroundColor:"white"}}>
        <Image source={require('../../assets/Login.png')} style={{resizeMode:"stretch",width:width,height:height-(height/3)-70}}/>

        <View style={{flex:1,backgroundColor:'white',marginVertical:10,marginHorizontal:15}} >
      <Text style={{fontWeight:'bold',fontSize:22,letterSpacing:0.1}}>ACCOUNT</Text>
      <Text style={{fontSize:12,letterSpacing:0.1,opacity:0.5,fontWeight:'600'}}>Login/Create Account quickly to  manage orders</Text>

      <TouchableOpacity style={{backgroundColor:'#f2802e',marginTop:20,alignItems:'center',justifyContent:'center'}}><Text style={{color:'white',fontWeight:'bold',fontSize:18,paddingVertical:15}}>LOGIN</Text></TouchableOpacity>

      <View style={{flex:1,borderTopWidth:2,borderTopColor:'black',marginTop:15}}>
       <TouchableOpacity style={{flexDirection:'row'}}>
      <MaterialCommunityIcons style={{paddingTop:15,opacity:0.7}} name='decagram' size={18}/>
      <Text style={{paddingTop:17,fontSize:12,paddingLeft:20,fontWeight:'500',color:'black'}}>Offers</Text>
      <MaterialCommunityIcons style={{paddingTop:15,marginLeft:'auto',opacity:0.7}} name='chevron-right' size={22}/>
      </TouchableOpacity> 
      </View>

      <View style={{flex:1,borderTopWidth:0.8,borderTopColor:'gray',marginTop:15}}>
       <TouchableOpacity style={{flexDirection:'row'}}>
        <MaterialCommunityIcons style={{paddingTop:15,opacity:0.7}} name='email' size={18}/>
        <View>
      <Text style={{paddingTop:10,fontSize:12,paddingLeft:20,fontWeight:'500'}}>Send Feedback</Text>
      <Text style={{fontSize:10,paddingLeft:20,opacity:0.5,letterSpacing:0.2}} >App version 3.36.2(873)</Text>
      </View>
      <MaterialCommunityIcons style={{paddingTop:15,marginLeft:'auto',opacity:0.7}} name='chevron-right' size={22}/>
      </TouchableOpacity>
      </View>  
    </View>
    
    
      </View>
      
    </>
    )
}

export default Account;