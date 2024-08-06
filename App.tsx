import { View, Text, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import StackNavigation from './navigation/StackNavigation'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import globalStyle from './globalStyle'

const App = () => {
  return (
    
      <Provider store={store}>
        <PersistGate persistor={persistor}>
            <StackNavigation />
            <StatusBar 
              backgroundColor="#27ab4a"
            />
        </PersistGate>
      </Provider>
   
    
  )
}

export default App