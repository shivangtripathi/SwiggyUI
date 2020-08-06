import React from 'react'
import { View, Text,Image } from 'react-native'



export default function Card({url,title,off,time}) {
    var opac = 0;

    {if(off){
        opac = 1
    }}

        return(
            <View style={{height:150,width:140,marginLeft:2,borderRadius:10,marginHorizontal:10}}>
			<View style={{flex:2}}>
				<Image source={url} style={{flex:1, height: undefined, width: undefined,borderRadius:5}} resizeMode="cover"/>
			</View>
			<View style={{flex:1,backgroundColor:'white'}}>
            <Text style={{fontSize:18,fontWeight:'bold',backgroundColor:'#7f461b',marginTop:-20,color:'white',alignSelf:'center',width:'80%' ,borderRadius:10,padding:5 ,paddingHorizontal:10,opacity:opac}}>{off} Off</Text>
				<Text style={{opacity:0.8,fontSize:16,fontWeight:'bold'}}>{title}</Text>
                <Text style={{opacity:0.5,fontSize:12}}>{time}</Text>
			</View>
			</View>
        )

}



///