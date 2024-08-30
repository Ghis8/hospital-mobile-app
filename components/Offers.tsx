import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { offers } from '../constants/Data'
import Icon from 'react-native-vector-icons/FontAwesome5'
const Offers = () => {
  return (
    
    <FlatList 
        horizontal
        data={offers.slice(0,3)}
        keyExtractor={item=>item.color}
        renderItem={({item})=>(
            <View className={`w-24 h-28 rounded-xl mx-5 flex-col items-center justify-center gap-3 bg-[#27ab4a]`}>
                <Icon 
                    color='white'
                    size={24}
                    name={item.iconName}
                />
                <Text className='text-white capitalize font-bold text-sm'>{item.title}</Text>
            </View>
        )}
    />
  )
}

export default Offers