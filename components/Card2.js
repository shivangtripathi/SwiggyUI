import React from 'react'
import { View, Text,Image } from 'react-native'



export default function Card({url,title,off}) {
    var opac = 0;

    {if(off){
        opac = 1
    }}

        return(
            <View style={{height:150,flex:1,marginLeft:2,borderRadius:10,marginVertical:20,flexDirection:'row',justifyContent:'space-between'}}>
			<View style={{height:150,width:150}}>
				<Image source={url} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
                <Text style={{fontSize:18,fontWeight:'bold',backgroundColor:'#7f461b',marginTop:-20,color:'white',alignSelf:'center',width:'80%' ,borderRadius:10,padding:5 ,paddingHorizontal:10,opacity:opac}}>{off} Off</Text>
			</View>
			<View style={{height:150,alignItems:'center',paddingTop:5,flex:1,backgroundColor:'white'}}>
				<Text style={{opacity:0.8,fontSize:18,fontWeight:'bold'}}>{title}</Text>
			</View>
			</View>
        )

}



///