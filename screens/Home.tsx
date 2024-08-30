import { View, Text, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
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
  const [search,setSearch]=useState<boolean>(false)
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
      <View className='relative bg-white my-5 rounded-xl w-[98%] mx-auto'>
        <TextInput
          returnKeyLabel='search'
          inputMode='search'
          onFocus={()=>setSearch(true)}
          onBlur={()=>setSearch(false)}
          className={theme=='dark'?'w-full pl-2 text-black':'w-full text-black pl-2'}
          placeholder='Search'
          placeholderTextColor='gray'
        />
        {
          search ==true && 
          <Icon 
            onPress={()=>console.log("Search")}
            name="arrow-right"
            color='black'
            size={24}
            style={{
              position:'absolute',
              top:10,
              right:10
            }}
          />
        }
        {search == false &&
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
        }
      </View>
      <Service />
      <View className='w-[98%] px-2 mx-auto flex-row gap-x-[14px] mb-1 mt-3 overflow-x-auto py-3'>
          <View className={`w-20 h-24 rounded-xl flex-col items-center justify-center gap-2 bg-[#a68d3d]`}>
              <FontAwesome5
                  color='white'
                  size={24}
                  name={offers[0].iconName}
              />
              <Text className='text-white  capitalize font-bold text-xs'>{offers[0].title}</Text>
          </View>
          <View className={`w-20 h-24 rounded-xl flex-col items-center justify-center gap-2 bg-[#c97a3c]`}>
              <FontAwesome5
                  color='white'
                  size={24}
                  name={offers[1].iconName}
              />
              <Text className='text-white capitalize font-bold text-xs'>{offers[1].title}</Text>
          </View>
          <View className={`w-20 h-24 rounded-xl flex-col items-center justify-center gap-2 bg-[#749163]`}>
              <FontAwesome5
                  color='white'
                  size={24}
                  name={offers[2].iconName}
              />
              <Text className='text-white capitalize font-bold text-xs'>{offers[2].title}</Text>
          </View>
          <View className={`w-20 h-24 rounded-xl flex-col items-center justify-center gap-2 bg-[#915178]`}>
              <FontAwesome5
                  color='white'
                  size={24}
                  name={offers[3].iconName}
              />
              <Text className='text-white capitalize font-bold text-xs'>{offers[3].title}</Text>
          </View>
      </View>
      <View className='w-[98%] mx-auto px-1'>
          <View className='flex-row items-center justify-between'>
            <Text className={theme=='dark'?"text-white font-bold":'text-black font-bold'}>History</Text>
            <TouchableOpacity 

            >
              <Text className='text-[#27ab4a] font-bold'>See All</Text>
            </TouchableOpacity>
            
          </View>
          <View className=''>

          </View>
      </View>
    </View>
  )
}

export default Home