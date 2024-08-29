import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectTheme, selectUser } from '../redux/slices/userSlice'
import Icon from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Nav } from '../components'

const Home = (props:any) => {
  const user=useAppSelector(selectUser)
  const [notification,setNotification]=useState<number>(1)
  const theme=useAppSelector(selectTheme)
  console.log("user->",user)
  return (
    <View 
      className={
        theme=='light'?
        "flex-1 bg-white p-2":
        "flex-1 bg-black p-2"
    }>
      <Nav 
        FirstName={user.firstName}
        Address={user.address}
        Profile={()=>console.log("Profile pic pressed")}
      />
    </View>
  )
}

export default Home