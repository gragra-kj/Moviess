import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View ,Dimensions} from 'react-native'
import React from 'react'
import { style } from '../theme'
import { useNavigation } from '@react-navigation/native'
var {width,height}=Dimensions.get('window')
export default function MovieList({title,data}) {
  const navigation=useNavigation
  let movieName="Kingdom Planet Apes"
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-xl">{title}</Text>
        <TouchableOpacity>
          <Text style={style.text} className="text-lg">See All</Text>
        </TouchableOpacity>
      </View>
      {/* movie row */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingHorizontal:15}}>
        {
          data.map((item,index)=>{
            return(
              <TouchableWithoutFeedback key={index} onPress={()=>navigation.navigate('Movie',item)}>
                <View className="space-y-1 mr-4">
                  <Image source={require('../assets/image.png')} className="rounded-3xl" style={{width:width*0.33,height:height*0.22}}/>
                  <Text className="text-neutral-300 ml-1">{movieName}</Text>
                </View>
               
              </TouchableWithoutFeedback>
            )

          })
        }


      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})