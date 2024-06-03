import { Dimensions, StyleSheet, Text, View,TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel';
import 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
var {width,height}=Dimensions.get('window')
export default function TrendingMovies({data}) {
  const navigation=useNavigation();
  const handleClick =(item)=>{
    navigation.navigate('Movies',item)
  }

  return (
    <View className="mb-8">
      <Text className="text-white text-xl mb-4">Trending</Text>
      <View style={styles.carousel}>
        <Carousel
          data={data}
          renderItem={({ item }) => (
            <MovieCard item={item} handleClick={handleClick} />
          )}
          loop
          width={width * 0.6}
          height={height * 0.4}
          autoPlay={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  carousel:{
    display:"flex",
    alignItems:"center"
  }
  
})

const MovieCard =({item,handleClick})=>{
    return(
        <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
          <Image source={require('../assets/image.png')} style={{
            width:width*0.6,
            height:height*0.4,

          
          }} />
        </TouchableWithoutFeedback>
    )
}

