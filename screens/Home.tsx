import { View, Text, Image, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectTheme, selectUser } from '../redux/slices/userSlice'
import Icon from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Nav, Offers, Service } from '../components'
import { offers } from '../constants/Data'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Home = (props:any) => {
  const user=useAppSelector(selectUser)
  const [notification,setNotification]=useState<number>(1)
  const theme=useAppSelector(selectTheme)
  // console.log("user->",user)
  return (
    <View 
      className={
        theme=='light'?
        "flex-1 bg-gray-200 p-2":
        "flex-1 bg-black p-2"
    }>
      <Nav 
        FirstName={user.firstName}
        Address={user.address}
        Profile={()=>console.log("Profile pic pressed")}
      />
      <View className='relative bg-white my-5 rounded-xl w-[90%] mx-auto'>
        <TextInput
          className={theme=='dark'?'w-full pl-2 text-black':'w-full text-black pl-2'}
          placeholder='Search'
          placeholderTextColor='gray'
        />
        <Icon 
          onPress={()=>console.log("Search")}
          name="search"
          color='black'
          size={28}
          style={{
            position:'absolute',
            top:10,
            right:10
          }}
        />
      </View>
      <Service />
      <View className='w-[90%] mx-auto  my-5 overflow-x-auto py-3'>
        
      </View>
    </View>
  )
}

export default Home