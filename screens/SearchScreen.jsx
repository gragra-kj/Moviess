import { View, Text, Dimensions, SafeAreaView, TextInput, TouchableOpacity, ScrollView, TouchableWithoutFeedback, Image } from 'react-native'
import React, { useState } from 'react'
import { XMarkIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';
import Loading from '../components/loading';

var {width,height}=Dimensions.get('window')

export default function SearchScreen() {
    const navigation=useNavigation();
    const [results,setResults]=useState([1,2,3,4])
    const [loading,setLoading]=useState(false)
    let movieName='Kingdom of the Planet of the Apes'
  return (
    <SafeAreaView className="bg-neutral-800 flex-1 pt-7">
      <View className="mx-4 mb-3 flex-row justify-between items-center border border-neutral-500 rounded-full">
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={"white"}
          className="pb-1 pl-6 flex-1 font-semibold text-white tracking-wider"
        />
        <TouchableOpacity
          className="rounded-full p-3 m-1"
          onPress={() => navigation.navigate("Home")}
        >
          <XMarkIcon size="25" color="white" />
        </TouchableOpacity>
      </View>
      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          className="space-y-3"
        >
          <Text className="text-white font-semibold ml-1">
            Results {results.length}
          </Text>
          <View className="flex-row justify-between flex-wrap">
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push("Movies", item)}
                >
                  <View className="space-y2 mb-4">
                    <Image
                      className="rounded-3xl"
                      source={require("../assets/image.jpg")}
                      style={{
                        width: width * 0.44,
                        height: height * 0.3,
                      }}
                    />
                    <Text className="text-neutral-300 ml-1">
                      {movieName.length > 22
                        ? movieName.slice(0, 22) + "..."
                        : movieName}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View className="flex-row justify-center">
          <Image
            className="h-96 w-96"
            source={require("../assets/movies2.jpg")}
          />
        </View>
      )}
    </SafeAreaView>
  );
}