import { View, Text } from 'react-native'
import React from 'react'
import { useAppSelector } from '../redux/hooks'
import { selectTheme } from '../redux/slices/userSlice'
import { IAlert } from '../types'

const Alert = ({
    title,
    body,
    accept,
    cancel,
    later
}:IAlert) => {
    const theme=useAppSelector(selectTheme)
  return (
    <View className={theme=='dark'?'bg-black py-3 px-4 w-[80%] h-60':'bg-black py-3 px-4 w-[80%] h-60'}>
      <Text className={theme=='dark'?'':''}>{title}</Text>
    </View>
  )
}

export default Alert