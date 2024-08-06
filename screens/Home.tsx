import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectTheme, selectUser } from '../redux/slices/userSlice'

const Home = () => {
  const user=useAppSelector(selectUser)
  const theme=useAppSelector(selectTheme)
  console.log("user->",user)
  return (
    <View 
      className={
        theme=='light'?
        "flex-1 bg-white p-2":
        "flex-1 bg-black p-2"
    }>
      <View className=''>
        <View className=''>
          <Text className={theme== 'light'?"text-balck text-xs":"text-gray-500 text-xs"}>Location</Text>
        </View>
      </View>
    </View>
  )
}

export default Home