import React from 'react'
import { StyleSheet, Text, View ,Image,TouchableOpacity} from 'react-native';
function Cart() {
    return (
      <View style={{ flex:1, justifyContent: 'center', alignItems: 'center',backgroundColor:'white' }}>
         <View style={{justifyContent: 'center', alignItems: 'center',backgroundColor:'white',marginTop:60}}>
        <Image source={require('../../assets/food.png')} style={{width:250,height:250}} />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center',backgroundColor:'white',marginTop:10}}>
        <Text style={{fontWeight:'bold',opacity:0.7,fontSize:14,letterSpacing:0.4,paddingTop:5}}>GOOD FOOD IS ALWAYS COOKING</Text>
        <View style={{  justifyContent: 'center', alignItems: 'center',backgroundColor:'white',marginTop:15}}>
        <Text style={{opacity:0.4,fontSize:11,letterSpacing:0.2}}>Your cart is empty.</Text>
        <Text style={{opacity:0.4,fontSize:11,letterSpacing:0.2}}>Add something from the menu</Text>
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center',backgroundColor:'white',marginTop:5}}>
      <TouchableOpacity style={{borderColor:'#f2802e',marginTop:20,borderWidth:1.5,borderRadius:1}}><Text style={{color:'#f2802e',paddingVertical:8,letterSpacing:0.2,paddingHorizontal:20,fontWeight:"700",fontSize:12,opacity:0.9}}>BROWSE RESTRAUNTS</Text></TouchableOpacity>
      </View>
      </View>
      </View>
    )
}

export default Cart;