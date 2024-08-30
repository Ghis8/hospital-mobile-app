import { View, Text, Image } from 'react-native'
import React from 'react'
import { services } from '../constants/Data'

const Service = () => {
  return (
    <View className='relative bg-[#27ab4a] w-[98%] h-40 mx-auto rounded-xl'>
      
      <View className='flex-col mt-2 w-3/4'>
        <Text className='text-white font-bold text-xl text-center'>{services[0].title}</Text>
        <View className='w-[90%] mt-2'>
            <Text className='text-gray-200 ml-2  '>{services[0].content}</Text>
        </View>
      </View>
      <Image 
        className='absolute top-0 right-2 z-20 w-[30%] h-40 bg-transparent'
        source={require('../assets/doc.jpg')}
      />
    </View>
  )
}

export default Service