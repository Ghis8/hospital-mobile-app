import { View, Text, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectTheme } from '../redux/slices/userSlice'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Iconicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Message = () => {
  const theme=useAppSelector(selectTheme)
  const [messages,setMessage]=useState<number>(0)
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
          placeholder='Search messages'
          placeholderTextColor={theme=='dark'?'white':'black'}
          className={theme=='dark'?'w-full bg-gray-500 mt-2 pl-12 rounded-2xl':'w-full bg-gray-300 rounded-2xl mt-2 pl-12'}
        />
      </View>
      <View className='my-5 w-[90%] mx-auto'>
          <View className='flex-row w-full justify-center items-center gap-[2%]'>
            <View className='flex-col w-[22%] rounded-md py-2 justify-center items-center bg-transparent border-[1px] border-gray-500'>
              <MaterialIcons 
                name="mark-unread-chat-alt"
                size={24}
                color='#27ab4a'
              />
              <Text className={theme=='dark'?'text-white text-sm':'text-black text-sm'}>Unread</Text>
            </View>
            <View className='flex-col w-[22%] rounded-md py-2 justify-center items-center bg-transparent border-[1px] border-gray-500'>
              <Icon 
                name="account"
                size={24}
                color='#27ab4a'
              />
              <Text className={theme=='dark'?'text-white text-sm':'text-black text-sm'}>Known</Text>
            </View>
            <View className='flex-col w-[22%] rounded-md py-2 justify-center items-center bg-transparent border-[1px] border-gray-500'>
              <Icon 
                name="account-off"
                size={24}
                color='#27ab4a'
              />
              <Text className={theme=='dark'?'text-white text-sm':'text-black text-sm'}>Unknown</Text>
            </View>
            <View className='flex-col w-[22%] rounded-md py-2 justify-center items-center bg-transparent border-[1px] border-gray-500'>
              <Icon
                name="star"
                size={24}
                color='#27ab4a'
              />
              <Text className={theme=='dark'?'text-white text-sm':'text-black text-sm'}>Stared</Text>
            </View>
          </View>

          <View className='flex-row w-full justify-center items-center gap-[2%] my-2'>
            <View className='flex-col w-[22%] rounded-md py-2 justify-center items-center bg-transparent border-[1px] border-gray-500'>
              <Icon 
                name="image"
                size={24}
                color='#27ab4a'
              />
              <Text className={theme=='dark'?'text-white text-sm':'text-black text-sm'}>Images</Text>
            </View>
            <View className='flex-col w-[22%] rounded-md py-2 justify-center items-center bg-transparent border-[1px] border-gray-500'>
              <Icon
                name="video"
                size={24}
                color='#27ab4a'
              />
              <Text className={theme=='dark'?'text-white text-sm':'text-black text-sm'}>Videos</Text>
            </View>
            <View className='flex-col w-[22%] rounded-md py-2 justify-center items-center bg-transparent border-[1px] border-gray-500'>
              <Icon
                name="pin"
                size={24}
                color='#27ab4a'
              />
              <Text className={theme=='dark'?'text-white text-sm':'text-black text-sm'}>Places</Text>
            </View>
            <View className='flex-col w-[22%] rounded-md py-2 justify-center items-center bg-transparent border-[1px] border-gray-500'>
              <Icon
                name="link"
                size={24}
                color='#27ab4a'
              />
              <Text className={theme=='dark'?'text-white text-sm':'text-black text-sm'}>Links</Text>
            </View>

          </View>
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
            <Text className={theme=='dark'?'text-white font-bold text-xl':'text-black font-bold text-xl'}>Messages</Text>
            <View className='flex-row items-center gap-x-4'>
              <Iconicons
                onPress={()=>setSearch(true)}
                name="search"
                color={theme=='dark'?'white':'black'}
                size={24}
              />
              <Image 
                source={require('../assets/profile.jpeg')}
                alt='profile'
                className='w-8 h-8 rounded-full'
              />
            </View>
        </View>
      </View>
      {
        messages==0 &&<View className='flex items-center justify-center mt-5'>
          <Text className='text-gray-500 font-bold text-xl'>No Message Available</Text>
        </View>
      }
    </View>
  )
}

export default Message  