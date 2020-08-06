import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity,Image} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Card from '../Card';
import Card2 from '../Card2';
import Data from '../Data';


function HomeScreen() {
    return (
		<View style={{flex:1,backgroundColor:'white'}} >
      <View style={styles.main_Container}>
		  <View style={styles.Location} >
			<MaterialCommunityIcons name='map-marker' size={24} color='#f2802e'style={{paddingTop:2}}/>
		 <Text style={styles.LocationHeading}>Other</Text>
		 </View>
		 <View style={styles.LocationContainer}>
			 <Text style={styles.LocationSubHeading}>92b,New Rajvihar Colony,Unnamed ....</Text>
			 <MaterialCommunityIcons name='brightness-percent' size={26} color='black' style={{marginLeft:15,marginTop:-20}}/>
			 <Text style={{fontSize:16,paddingLeft:8,fontWeight:'bold',marginTop:-15,opacity:0.8,color:'black'}}>Offers</Text>
		 </View>
		 <ScrollView style={{backgroundColor:'white',marginTop:5}} showsVerticalScrollIndicator={false}>
		 <View style={{paddingHorizontal:10,paddingVertical:5,borderLeftColor:'#f2802e',borderLeftWidth:6,backgroundColor:'white',marginTop:15,borderTopLeftRadius:15,borderBottomLeftRadius:15,height:120}} >
			 <Text style={{fontSize:21,color:'#031c24',fontWeight:'bold',letterSpacing:0.4}}>Swiggy can now deliver food, groceries and other essentials. Deliveries will be open from:</Text>
			 <Text style={{fontSize:13,marginTop:15,color:'#031c24',letterSpacing:0.3,fontWeight:'bold'}}>9:00 am to 9:00 pm</Text> 
		 </View>
		 <TouchableOpacity>
				<View style={{justifyContent:'flex-end',backgroundColor:'#e0654e',marginTop:20,height:130,borderRadius:10}} >
				<Text style={{fontSize:22,fontWeight:'bold',letterSpacing:0.3,paddingTop:5,paddingLeft:10,color:'white'}}>Restraunts</Text>
				<Text style={{fontSize:16,opacity:0.8,letterSpacing:0.3,color:'white',paddingLeft:10}}>No-contact delivery available.</Text>
				<View style={{alignItems:'flex-end',flexDirection:'row',backgroundColor:'#d9553c',marginTop:20,height:30,borderBottomEndRadius:10,borderBottomStartRadius:10}} >
					<Text style={{fontSize:17,letterSpacing:0.3,padding:5,color:'white'}}>View All</Text>
					<MaterialCommunityIcons name='arrow-right' size={18} style={{color:'white',padding:5,color:'white'}}/>
				</View>
				</View>
			</TouchableOpacity>		
		 <View style={{justifyContent:'space-between',backgroundColor:'white',height:150,borderRadius:10,flexDirection:'row'}} >
				<TouchableOpacity  style={{flex:1,alignItems:'flex-end',flexDirection:'row',backgroundColor:'#ef5a5c',marginTop:20,borderRadius:10}}>
						<View style={{flex:1,flexDirection:'column',marginTop:10}}>

							<View style={{padding:5}}>
								<Text style={{fontSize:18,letterSpacing:0.1,color:'white',fontWeight:'bold',paddingTop:5}}>Grocery</Text>
								<Text style={{fontSize:14,letterSpacing:0.1,color:'white',opacity:0.7,paddingTop:5}}>Essential delivered in two hours.</Text>
								</View>	
							
							<View style={{flexDirection:'row',backgroundColor:'#e75152',borderBottomStartRadius:10,borderBottomEndRadius:10}}>
							<MaterialCommunityIcons name='arrow-right' size={18} style={{color:'white',padding:5,color:'white'}}/>
							</View>	
						</View>	
				</TouchableOpacity>

				<TouchableOpacity  style={{flex:1,alignItems:'flex-end',flexDirection:'row',backgroundColor:'#ed7632',marginTop:20,borderRadius:10,marginLeft:15}}>
						<View style={{flex:1,flexDirection:'column',marginTop:10}}>

							<View style={{padding:5}}>
								<Text style={{fontSize:18,letterSpacing:0.1,color:'white',fontWeight:'bold',paddingTop:5}}>Genie</Text>
								<Text style={{fontSize:14,letterSpacing:0.1,color:'white',opacity:0.7,paddingTop:5}}>Anything you need delivered.</Text>
								</View>	
							
							<View style={{flexDirection:'row',backgroundColor:'#e0692b',borderBottomStartRadius:10,borderBottomEndRadius:10}}>
							<MaterialCommunityIcons name='arrow-right' size={18} style={{color:'white',padding:5,color:'white'}}/>
							</View>	
						</View>	
				</TouchableOpacity>
		 </View>
		<View style={{marginTop:20,flexDirection:'row',flex:1}}>
			<MaterialCommunityIcons name='thumb-up'size={24} 	color='#031c24'/>
		    <Text style={{fontWeight:'bold',fontSize:18,marginLeft:5,color:'#031c24'}}>Top Picks For You</Text>
		 </View>

		
			<View style={{height:200,marginTop:20}}>
			<ScrollView horizontal scrollEventThrottle={16} style={{flexDirection:'row'}}>
			<TouchableWithoutFeedback style={{flexDirection:'row'}} >
				{Data.map((items,index)=>(
      				 <Card url={items.img} title={items.title} off={items.off} time={items.time} key={index}/>	
				))}
			</TouchableWithoutFeedback>
		 </ScrollView>
		 </View>
		 <View style={{flex:1,backgroundColor:'white'}}>
			 <Text style={{color:'#031c24',fontWeight:'bold',fontSize:22}}>Temporarily Closed</Text>
		 {Data.map((items,index)=>(
      				 <Card2 url={items.img} title={items.title}  key={index} off={items.off}/>	
				))}
				</View>
		 </ScrollView>
		 </View>
		 </View>
    )
}


const styles = StyleSheet.create({
main_Container:{
	flex:1,
	marginTop:20,
	marginHorizontal:10,
	backgroundColor:'white',
},
Location:{
	flexDirection:'row',
	backgroundColor:'white',
	paddingTop:15,
},
LocationHeading:{
	fontSize:22,
	opacity:0.9,
	color:'#031c24',
	fontWeight:'bold'
},
LocationContainer:{
	flexDirection:'row',
	backgroundColor:'white',
	paddingTop:2,
	paddingBottom:5,
},
LocationSubHeading:{
	fontSize:13,
	paddingLeft:8,
	fontWeight:'bold',
	opacity:0.5,
	color:'#031c24',
	letterSpacing:0.3,
}
})

export default HomeScreen;
