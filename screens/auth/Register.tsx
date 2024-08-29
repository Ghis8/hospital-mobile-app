import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { selectTheme } from '../../redux/slices/userSlice'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Register = (props:any) => {
  const theme=useAppSelector(selectTheme)
  const [gender,setGender]=useState<string>("Male")
  const [loading,setLoading]=useState<boolean>(false)
  const genderOptions=['Male','Female']
  
  return (
    <KeyboardAwareScrollView
        className={theme == "light"?
          "bg-white flex-1 px-5":
          "bg-black flex-1 px-5"
        }
    >
      <Text className={theme=='light'?'text-black font-bold text-2xl text-center mt-5':'text-white font-bold text-2xl text-center mt-5'}>
        Register
      </Text>
      <View className='mt-5'>
        <TextInput 
          className={theme=='light'?'w-3/4 border-b-[1px] border-gray-500 mb-3 py-2 mx-auto text-black': 'w-3/4 text-white border-b-[1px] border-gray-500 mb-3 py-2 mx-auto'}
          placeholder='Full Name....'
          placeholderTextColor="gray"
        />
        <TextInput 
          className={theme=='light'?'w-3/4 border-b-[1px] border-gray-500 mb-3 py-2 mx-auto text-black': 'w-3/4 text-white border-b-[1px] border-gray-500 mb-3 py-2 mx-auto'}
          placeholder='Email Address....'
          placeholderTextColor="gray"
        />
        <TextInput 
          className={theme=='light'?'w-3/4 border-b-[1px] border-gray-500 mb-3 py-2 mx-auto text-black': 'w-3/4 text-white border-b-[1px] border-gray-500 mb-3 py-2 mx-auto'}
          placeholder='+250783425....'
          placeholderTextColor="gray"
        />
        <TextInput 
          className={theme=='light'?'w-3/4 border-b-[1px] border-gray-500 mb-3 py-2 mx-auto text-black': 'w-3/4 text-white border-b-[1px] border-gray-500 mb-3 py-2 mx-auto'}
          placeholder='Address...'
          placeholderTextColor="gray"
        />
        <TextInput 
          className={theme=='light'?'w-3/4 border-b-[1px] border-gray-500 mb-3 py-2 mx-auto text-black': 'w-3/4 text-white border-b-[1px] border-gray-500 mb-3 py-2 mx-auto'}
          placeholder='Password'
          placeholderTextColor="gray"
        />
        <TextInput 
          className={theme=='light'?'w-3/4 border-b-[1px] border-gray-500 mb-3 py-2 mx-auto text-black': 'w-3/4 text-white border-b-[1px] border-gray-500 mb-3 py-2 mx-auto'}
          placeholder='Confirm Password'
          placeholderTextColor="gray"
        />
        <View className='w-3/4 flex-row items-center justify-between mx-auto mt-5 mb-3'>
          {
            genderOptions.map((item,index)=>(
              <TouchableOpacity
                onPress={()=>setGender(item)}
                key={index}
                className={gender == genderOptions[index]? 'w-2/5 bg-[#27ab2a] rounded-lg py-2':'w-2/5 bg-gray-400 rounded-lg py-2'}
              >
                <Text className='text-white font-semibold text-center'>{item}</Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <TouchableOpacity
          className='w-2/4 mx-auto mt-7 rounded-lg bg-[#27ab2a] py-3'
        >
          <Text className='text-center font-bold text-white'>Register</Text>
        </TouchableOpacity>
        <View className='flex-row items-center gap-1 mt-3 mx-auto'>
                <Text className={theme=='light'?"text-black font-semibold":"text-white font-semibold"}>Already have an Account ?</Text>
                <TouchableOpacity
                    onPress={()=>{
                        props.navigation.navigate("Login")
                    }}
                >
                    <Text className='font-semibold underline text-blue-700'>Login</Text>
                </TouchableOpacity>
            </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default Register