import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectTheme } from '../redux/slices/userSlice'
import Icon from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

interface NavProps{
    FirstName:string 
    Address:string 
    Notification?:()=>void 
    Profile?:()=>void
}

const Nav = ({FirstName,Address,Notification,Profile}:NavProps) => {
    const theme=useAppSelector(selectTheme)
    const [notification,setNotification]=useState<number>(1)
  return (
    <View className='flex-row justify-between  items-center py-3'>
        <TouchableOpacity 
            onPress={Profile}
        >
            <Image 
                source={require('../assets/profile.jpeg')}
                alt="profile"
                className='w-10 h-10 rounded-full'
            />
        </TouchableOpacity>
        
        <View className='flex-col '>
          <Text className={theme=='dark'?'text-white font-bold':'text-black text-xl font-bold'}>Hello, {FirstName}</Text>
          <View className='flex-row items-center gap-1'>
            <Icon 
              name='map-pin'
              color={theme =='dark' ?'white':'black'}
            />
            <Text className={theme=='dark'?"text-xs text-white":'text-xs text-black'}>{Address}</Text>
          </View>
        </View>
        <View className='w-10 h-10 relative rounded-full justify-center items-center'>
          {notification > 0 && <View className='absolute w-2 h-2 right-3 top-2 z-10 rounded-full bg-red-700'></View>}
          <FontAwesome 
            name="bell"
            color='#27ab4a'
            size={24}
          />
        </View>
      </View>
  )
}

export default Nav