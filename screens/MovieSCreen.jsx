import { SafeAreaView, ScrollView, StyleSheet, Text, View,TouchableOpacity,Platform, Dimensions, Image} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ChevronLeftIcon} from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import { style, theme } from '../theme'
import { LinearGradient } from 'expo-linear-gradient'
import CastMembers from '../components/castMembers'
import MovieList from '../components/movieList'
import Loading from '../components/loading'

const ios=Platform.OS =='ios'
var {width,height}=Dimensions.get('window')
const topMargin=ios ? '': 'mt-7'
export default function MovieSCreen() {
  const {params:item}=useRoute()
  const navigation=useNavigation()
  const [loading,setLoading]=useState(false)
  const [cast,setCast]=useState([1,2,3,4.5]);
  const [similarMovies,setSimilarMovies]=useState([1,2,3])
  let movieName="Kingdom Planet of the Apes"
  const [isFavouritw,toggleFavourite]=useState(false)
  useEffect(()=>{

  },[item])
  return (
    <ScrollView
      contentContainerStyle={{ paddingBottom: 30 }}
      className="flex-1 bg-neutral-900 "
    >
      <View className="w-full">
        <SafeAreaView
          className={
            "z-20 w-full flex-row  justify-between items-center pt-4 px-4 absolute  " +
            topMargin
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
        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              source={require("../assets/image.png")}
              style={{ width: width, height: height * 0.55 }}
            />
            <LinearGradient
              colors={[
                "transparent",
                "rgba(23,23,23,0.8)",
                "rgba(23,23,23, 1)",
              ]}
              style={{ width, height: height * 0.4 }}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              className="absolute bottom-0"
            />
          </View>
        )}
      </View>
      <View style={{ marginTop: -(height * 0.09) }} className="space-y-3">
        <Text className="text-white text-center text-3xl font-bold tracking-wider">
          {movieName}
        </Text>
        <Text className="text-neutral-400 font-semibold text-base text-center">
          Release · 2020 · 170 min{" "}
        </Text>
        <View className="flex-row justify-center mx-4 space-x-2">
          <Text className="text-neutral-400 font-semibold text-base">
            Action ·{" "}
          </Text>
          <Text className="text-neutral-400 font-semibold text-base">
            Thrill ·{" "}
          </Text>
          <Text className="text-neutral-400 font-semibold text-base">
            Comedy ·{" "}
          </Text>
          <Text className="text-neutral-400 font-semibold text-base">
            Action
          </Text>
        </View>
        <Text className="text-neutral-400 mx-4 tracking-wide">
          Many years after the reign of Caesar, a young ape goes on a journey
          that will lead him to question everything he's been taught about the
          past and make choices that will define a future for apes and humans
          alike.
        </Text>
      </View>
      <CastMembers cast={cast} navigation={navigation} />
      <MovieList
        title="Similar Movies"
        data={similarMovies}
        hideSeeAll={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop:Platform.OS==='android'? 25:0,
    marginBottom:Platform.OS==='ios'? 8:3
  }
})