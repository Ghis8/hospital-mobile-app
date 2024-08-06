import { View, Text, useColorScheme, Image, TextInput, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { selectTheme, setUser } from '../../redux/slices/userSlice'
import { Users } from '../../constants/Data'

const Login = (props:any) => {
    const theme=useAppSelector(selectTheme)
    const [visible,setvisible]=useState<boolean>(true)
    const [loading,setLoading]=useState<boolean>(false)
    const dispatch=useAppDispatch()
    const [values,setValues]=useState<{email:string,password:string}>({
        email:'',
        password:""
    })
    const handleLogin=()=>{
        setLoading(true)
        setTimeout(()=>{
            
            if(values.email == '' || values.password =="") {
                setLoading(false)
                return ToastAndroid.show("Email and Password required",ToastAndroid.LONG)
            }
            else if(!Users.map(item=>item.email).includes(values.email)){
                setLoading(false)
                return ToastAndroid.show("User with this email does not exist",ToastAndroid.LONG)
            }
            else if (Users.filter(item=>item.email === values.email && item.password === values.password).length > 0){
                setLoading(false)
                dispatch(setUser(Users.filter(item=>item.email === values.email && item.password === values.password)[0]))
                props.navigation.replace("Home")
                return ToastAndroid.show("Welcome back",ToastAndroid.SHORT)
            }else{
                setLoading(false)
                return ToastAndroid.show("Wrong credentials",ToastAndroid.SHORT)
            }
        },2000)
        
    }
    // console.log(Users.filter(item=>item.email === "ghislainkongolo0@gmail.com" && item.password === "password0"))
    
  return (
    <KeyboardAwareScrollView 
        className={theme == "light"?
            "bg-white flex-1 px-5":
            "bg-black flex-1 px-5"
        }
    >
        
      <Image 
        source={theme =='light'? require('../../assets/logo_light.png'):require("../../assets/logo.png")}
        className='w-full h-64 mt-5 '
      />  
      <Text className={
        theme=="light"?
        'text-black text-3xl font-bold text-center':
        "text-white text-3xl font-bold text-center"
        }>
            {props.route.name}
        </Text>
        <View className='my-5'>
            <TextInput 
                onChangeText={(text)=>setValues({...values,email:text})}
                placeholder='Email Address...'
                placeholderTextColor="gray"
                className={theme == 'light'?
                    'w-3/4 mx-auto border-b-[1px] text-black border-gray-400 px-2 py-3 mt-5':
                    'w-3/4 mx-auto border-b-[1px] text-white border-gray-400 px-2 py-3 mt-5'
                }
                inputMode='email'
            />
            <View className='w-3/4 relative mx-auto'>
                {
                    visible ? 
                    <TouchableOpacity
                        onPress={()=>setvisible(false)}
                        style={{
                            position:'absolute',
                            top:"55%",
                            right:10,
                            zIndex:20
                        }}
                    >
                        <Icon 
                            name="eye" 
                            color="gray"
                            size={24}
                        />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                        onPress={()=>setvisible(true)}
                        style={{
                            position:'absolute',
                            top:"55%",
                            right:10,
                            zIndex:20
                        }}
                    >
                        <Icon 
                            name="eye-off" 
                            color="gray"
                            size={24}
                        />
                    </TouchableOpacity>
                    
                }
                
                <TextInput 
                    placeholder='Password'
                    onChangeText={(text)=>setValues({...values,password:text})}
                    placeholderTextColor="gray"
                    className={theme == 'light'?
                        'w-full mx-auto border-b-[1px] text-black border-gray-400 px-2 py-3 mt-5':
                        'w-full mx-auto border-b-[1px] text-white border-gray-400 px-2 py-3 mt-5'
                    }
                    autoCapitalize='none'
                    secureTextEntry={visible}
                />
                
            </View>
            <TouchableOpacity 
                className=' mt-3 mr-[14%]'
            >
                <Text className='text-blue-700 underline font-semibold text-right'>Forgot Password ?</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
                disabled={loading}
                onPress={handleLogin}
                className='w-2/4 bg-[#27ab4a] py-2 mx-auto rounded-md mt-7'
            >
                <Text className='text-center text-white font-bold text-xl'>{loading?"loading ...":"Login"}</Text>
            </TouchableOpacity>
            <View className='flex-row items-center gap-1 mt-3 mx-auto'>
                <Text className={theme=='light'?"text-black font-semibold":"text-white font-semibold"}>Don't have an Account ?</Text>
                <TouchableOpacity
                    onPress={()=>{
                        props.navigation.navigate("Register")
                    }}
                >
                    <Text className='font-semibold underline text-blue-700'>Register</Text>
                </TouchableOpacity>
            </View>
        </View>
    </KeyboardAwareScrollView>
  )
}

export default Login