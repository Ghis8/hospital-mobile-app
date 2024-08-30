import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useAppSelector } from '../redux/hooks'
import { selectTheme } from '../redux/slices/userSlice'
import { Image } from 'react-native'

const Appointments = () => {
  const theme=useAppSelector(selectTheme)
  const [report,setReport]=useState<number>(0)
  const [search,setSearch]=useState<boolean>(false)

  if(search){
    return(
      <View className={
        theme=='dark'?
        'bg-black flex-1':
        'bg-gray-200 flex-1'
      }>
      <View className={theme =='dark'?'w-[90%] mx-auto relative bg-black':'w-[90%] mx-auto relative bg-gray-200'}>
        <Iconicons 
          name="arrow-back"
          onPress={()=>setSearch(false)}
          color={theme=='dark'?'white':'black'}
          size={24}
          style={{
            position:'absolute',
            top:20,
            left:8,
            zIndex:20
          }}
        />
        <TextInput 
          placeholder='Search appointment'
          placeholderTextColor={theme=='dark'?'white':'black'}
          className={theme=='dark'?'w-full bg-gray-500 mt-2 pl-12 rounded-2xl':'w-full bg-gray-300 rounded-2xl mt-2 pl-12'}
        />
      </View>
      
    </View>
    )
  }
  return (
    <View className={
        theme=='dark'?
        'bg-black flex-1':
        'bg-gray-200 flex-1'
    }>
      <View className=''>
        <View className='flex-row items-center justify-between gap-2 p-2'>
            <Text className={theme=='dark'?'text-white font-bold text-xl':'text-black font-bold text-xl'}>Appointment</Text>
            <View className='flex-row items-center gap-x-4'>
              <Iconicons
                onPress={()=>setSearch(true)}
                name="search"
                color={theme=='dark'?'white':'black'}
                size={24}
              />
              
            </View>
        </View>
      </View>
      {
        report==0 &&<View className='flex items-center justify-center mt-5'>
          <Text className='text-gray-500 font-bold text-xl'>No Appointment Available</Text>
        </View>
      }
    </View>
) 
}

export default Appointments