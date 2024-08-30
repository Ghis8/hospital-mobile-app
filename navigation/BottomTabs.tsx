import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Appointments, Message, Profile } from '../screens'

const Tab=createBottomTabNavigator()
const BottomTabs = () => {
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false
    }}>
        <Tab.Screen 
            name="home"
            component={Home}
            options={{
                tabBarLabel:(tabLabel)=>(
                  <Text style={{color:tabLabel.focused?"#27ab4a":"gray",fontWeight:"700"}}>Home</Text>
                ),
                tabBarIcon:(tabIcon)=>(
                  <Icon name='home' size={24} color={tabIcon.focused?"#27ab4a":"gray"} />
                )
              }}
        />
        <Tab.Screen 
            name="message"
            component={Message}
            options={{
                tabBarLabel:(tabLabel)=>(
                  <Text style={{color:tabLabel.focused?"#27ab4a":"gray",fontWeight:"700"}}>Message</Text>
                ),
                tabBarIcon:(tabIcon)=>(
                  <Icon name='android-messages' size={24} color={tabIcon.focused?"#27ab4a":"gray"} />
                )
              }}
        />
        <Tab.Screen 
            name="report"
            component={Appointments}
            options={{
                tabBarLabel:(tabLabel)=>(
                  <Text style={{color:tabLabel.focused?"#27ab4a":"gray",fontWeight:"700"}}>Report</Text>
                ),
                tabBarIcon:(tabIcon)=>(
                  <Icon name='text-box' size={24} color={tabIcon.focused?"#27ab4a":"gray"} />
                )
              }}
        />
        <Tab.Screen 
            name="profile"
            component={Profile}
            options={{
                tabBarLabel:(tabLabel)=>(
                  <Text style={{color:tabLabel.focused?"#27ab4a":"gray",fontWeight:"700"}}>Profile</Text>
                ),
                tabBarIcon:(tabIcon)=>(
                  <Icon name='account' size={24} color={tabIcon.focused?"#27ab4a":"gray"} />
                )
              }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabs