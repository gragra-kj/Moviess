import { View, Text, Dimensions, Platform, ScrollView ,SafeAreaView,TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { style, theme } from '../theme'
import MovieList from '../components/movieList'
import Loading from '../components/loading'

var {width,height}=Dimensions.get('window')

const ios= Platform.OS =='ios'
const verticalMargin=ios ? '': 'my-3'
export default function PersonScreen() {
    const navigation=useNavigation()
    const [loading,setLoading]=useState(false)
    const [isFavouritw,toggleFavourite]=useState(false);
    const [personMovies,setPersonMovies]=useState([1,2,3,4])
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <SafeAreaView
        className={
          "z-20 w-full flex-row  justify-between items-center px-4 pt-5 " +
          verticalMargin
        }
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="rounded-xl p-1"
          style={style.background}
        >
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleFavourite(!isFavouritw)}>
          <HeartIcon
            size="35"
            color={isFavouritw ? theme.background : "white"}
          />
        </TouchableOpacity>
      </SafeAreaView>
      {
        loading ? (
            <Loading/>

        ):(
            <View>
            <View className="flex-row justify-center" style={{
                shadowColor:'#808080',
                shadowRadius:40,
                shadowOffset:{width:0,height:5},
                shadowOpacity:1,
    
            }}>
              <View className="items-center rounded-full overflow-hidden h-72 w-72 border-2 border-neutral-400">
                <Image
                  source={require("../assets/download.jpeg")}
                  style={{ height: height * 0.43, width: width * 0.74 }}
                />
              </View>
            </View>
            <View className="mt-6">
                <Text className="text-3xl text-white font-bold text-center">Keanu Reeves</Text>
                <Text className="text-base text-neutral-500 text-center">London, United Kingdom</Text>
            </View>
            <View className="mx-3 mt-6 flex-row justify-between items-center bg-neutral-700 rounded-full">
                <View className="border-r-2 border-r-neutral-400 px-4 items-center">
                    <Text className="text-white font-semibold">Gender</Text>
                    <Text className="text-neutral-300 text-sm">Male</Text>
                </View>
                <View className="border-r-2 border-r-neutral-400 px-4 items-center">
                    <Text className="text-white font-semibold">Birthday</Text>
                    <Text className="text-neutral-300 text-sm">2-09-1964 </Text>
                </View>
                <View className="border-r-2 border-r-neutral-400 px-4 items-center">
                    <Text className="text-white font-semibold">Known for</Text>
                    <Text className="text-neutral-300 text-sm">Acting</Text>
                </View>
                <View className=" px-4 items-center">
                    <Text className="text-white font-semibold">Popular</Text>
                    <Text className="text-neutral-300 text-sm">64.03</Text>
                </View>
            </View>
            <View className="my-6 mx-4 space-y-2">
                <Text className="text-white text-lg">Biography</Text>
                <Text className="text-neutral-400 tracking-wide">Keanu Charles Reeves, whose first name means "cool breeze over the mountains" in Hawaiian, was born September 2, 1964 in Beirut, Lebanon. He is the son of Patric Reeves, a showgirl and costume designer, and Samuel Nowlin Reeves, a geologist. Keanu's father was born in Hawaii, of British, Portuguese, Native Hawaiian, and Chinese ancestry, and Keanu's mother is originally from Essex England. After his parents' marriage dissolved, Keanu moved with his mother and younger sister, Kim Reeves, to New York City, then Toronto. Stepfather #1 was Paul Aaron, a stage and film director - he and Patricia divorced within a year, after which she went on to marry (and divorce) rock promoter Robert Miller. Reeves never reconnected with his biological father. In high school, Reeves was lukewarm toward academics but took a keen interest in ice hockey (as team goalie, he earned the nickname "The Wall") and drama. He eventually dropped out of school to pursue an acting career. </Text>
    
    
            </View>
            <MovieList title='Movies' data={personMovies}/>
          </View>


        )
      }

     
    </ScrollView>
  );
}