import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { Bars3CenterLeftIcon, MagnifyingGlassIcon } from 'react-native-heroicons/outline'
import { style } from '../theme'
import TrendingMovies from '../components/trendingMovies'
import MovieList from '../components/movieList'
const ios=Platform.OS =='ios'

export default function HomeScreen() {
    const [trendind,setTrending]=useState([1,2,3]);
    const [upcoming,setUpcoming]=useState([1,2,3]);
    const [topRated,setTopRated]=useState([1,2,3])
    
  return (
    // <SafeAreaView>
    //     <Text>HomeSreen</Text>
    // </SafeAreaView>
    <View className="flex-1 bg-neutral-800">
        <SafeAreaView className={ios ? "mb-2": 'mb-3'}>
            <StatusBar style='light'/>
            <View className="flex-row justify-between items-center mx-4">
                <Bars3CenterLeftIcon size="30" strokeWidth={2} color="white"/>
                <Text className="text-white text-3xl font-bold"><Text style={style.text}>M</Text>ovies</Text>
                <TouchableOpacity>
                    <MagnifyingGlassIcon size="30" strokeWidth={2} color="white"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:10}}>
            <TrendingMovies data={trendind} />
            <MovieList title='Upcoming' data={upcoming}/>
            <MovieList title='Top Rated' data={topRated}/>
        </ScrollView>
    </View>
  )
   
}

const styles = StyleSheet.create({})