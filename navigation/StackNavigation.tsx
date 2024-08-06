import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { 
    ForgotPassword, 
    Login, 
    Register 
} from '../screens/auth'
import { useColorScheme } from 'react-native'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { selectUser, setTheme } from '../redux/slices/userSlice'
import Home from '../screens/Home'

function StackNavigation() {
    const user=useAppSelector(selectUser)
    const Stack=createNativeStackNavigator()
    const theme=useColorScheme() ?? "light"
    const dispatch=useAppDispatch()
    useEffect(()=>{
        dispatch(setTheme(theme))
    })
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{
                headerShown:false
            }}
            initialRouteName={user.email ? "Home":"Login"}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name='forgotPassword' component={ForgotPassword} />
            <Stack.Screen name='Home' component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation