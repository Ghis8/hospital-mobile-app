import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useAppSelector } from '../redux/hooks'
import { selectTheme } from '../redux/slices/userSlice'

const Title = ({title,onPress}:{title:string,onPress:()=>void}) => {
    const theme=useAppSelector(selectTheme)
  return (
    <View className='relative'>
        <TouchableOpacity
            onPress={onPress}
            className='absolute'
        >
            <Icon 
                name="chevron-left"
                color={theme == 'light' ? "black":"white"}
            />
        </TouchableOpacity>
        
        <Text>{title}</Text>
    </View>
  )
}

export default Title