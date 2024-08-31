import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IhistoryCard } from '../types'
import { useAppSelector } from '../redux/hooks'
import { selectTheme } from '../redux/slices/userSlice'
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const HistoryCard = ({
    imageName,
    names,
    profession,
    date,
    status,
    action
}:IhistoryCard) => {
    const theme=useAppSelector(selectTheme)
  return (
    <TouchableOpacity 
        onPress={action}
        className={theme=='dark'?
            'relative w-full rounded-lg mx-auto my-1 bg-gray-100 py-2 px-4':
            'relative w-full rounded-lg mx-auto my-1 bg-white py-2 px-4'
    }>
        <View className={status=='pending'?
            'absolute right-3 px-2 top-2 rounded-sm py-[1px] bg-gray-200 ':status=='canceled'?
            'absolute right-3 px-2 top-2 rounded-sm py-[1px] bg-red-200':
            'absolute right-3 px-2 top-2 rounded-sm py-[1px] bg-green-200'
        }>
            <Text className={status=='pending'?
                'text-black capitalize text-xs':status=='canceled'?
                'text-red-500 capitalize text-xs':
                'text-[#27ab4a] capitalize text-xs'
            }>{status}</Text>
        </View>
        <View className='flex-row gap-x-2'>
            <Image 
                source={imageName}
                className='w-20 h-24 rounded-lg'
                alt='profile'
            />
            <View className='flex-col'>
                <Text className={theme=='dark'?"text-black font-semibold capitalize":"text-black capitalize font-semibold"}>{names}</Text>
                <Text className='text-gray-400 text-sm'>{profession}</Text>
                <View className='flex-row items-center gap-x-1 mt-5'>
                    <FontAwesome 
                        name='calendar'
                        size={15}
                        color='gray'
                    />
                    <Text className='text-xs text-gray-500'>{date}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default HistoryCard