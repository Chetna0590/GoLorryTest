
import 'react-native-gesture-handler';
import React, { Component } from 'react';
import Login from './src/Login/Login'
import Dashboard from './src/Dashboard/Dashboard'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Provider } from 'react-redux'
import store from './store'

import {
  View
} from 'react-native'

const Stack = createStackNavigator()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Dashboard} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}


export default App;
