import { View, Text, Dimensions, Platform, ScrollView ,SafeAreaView,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import { ChevronLeftIcon } from 'react-native-heroicons/outline'
import {HeartIcon} from 'react-native-heroicons/solid'
import { useNavigation } from '@react-navigation/native'
import { style, theme } from '../theme'

var {width,height}=Dimensions.get('window')

const ios= Platform.OS =='ios'
const verticalMargin=ios ? '': 'my-3'
export default function PersonScreen() {
    const navigation=useNavigation()
    const [isFavouritw,toggleFavourite]=useState(false)
  return (
    <ScrollView className="flex-1 bg-neutral-900" contentContainerStyle={{paddingBottom:20}}>
         <SafeAreaView className={"z-20 w-full flex-row  justify-between items-center px-4"+verticalMargin } >
          <TouchableOpacity onPress={()=>navigation.goBack()} className="rounded-xl p-1" style={style.background}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>toggleFavourite(!isFavouritw)}>
            <HeartIcon size='35' color={isFavouritw ? theme.background:'white'}/>
          </TouchableOpacity>
        </SafeAreaView>


    </ScrollView>
  )
}