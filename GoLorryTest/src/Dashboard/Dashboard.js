import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Entypo'
import Orders from './Orders'
import Reports from './Reports'
import OrderDetails from './OrderDetails'
import Logout from './Logout'

const NavigationDrawerStructure = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer()
  }

  return (
      <TouchableOpacity onPress={() => toggleDrawer()} style={{ felx:1,flexDirection: 'row', marginLeft:10}}>
        <Icon color='white' name='menu' size={30} style={{ fontWeight: 'bold'}} />
      </TouchableOpacity>
  );
}
const OrdersScreen = ({ navigation }) => {
  return (<Stack.Navigator initialRouteName="Orders">
    <Stack.Screen
      name="Orders"
      component={Orders}
      options={{
        title: 'Orders', 
        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#367030', 
        },
        headerTintColor: 'white', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}
    />
    <Stack.Screen
      name="Order Details"
      component={OrderDetails}
      options={{
        headerStyle: {
          backgroundColor: '#367030', 
        },
        headerTintColor: 'white', 
        headerTitleStyle: {
          fontWeight: 'bold', 
        },
      }}>
    </Stack.Screen>
  </Stack.Navigator>

  );
}

const ReportsScreen = ({ navigation }) => {
  return (<Stack.Navigator initialRouteName="Reports">
    <Stack.Screen
      name="Reports"
      component={Reports}
      options={{
        title: 'Reports', 
        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#367030', 
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}
    />
  </Stack.Navigator>

  );
}

const LogOutScreen = ({ navigation }) => {
  return (<Stack.Navigator initialRouteName="Logout">
    <Stack.Screen
      name="Logout"
      component={Logout}
      options={{
        title: '', 
        headerLeft: () => <NavigationDrawerStructure navigationProps={navigation} />,
        headerStyle: {
          backgroundColor: '#367030', 
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}
    />
  </Stack.Navigator>

  );
}
const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

class Dashboard extends Component {

  render() {
    return (
      <Drawer.Navigator initialRouteName="Orders"
        drawerContentOptions={{
          activeTintColor: '#218016',
          itemStyle: { marginVertical: 5 }
        }}>
        <Drawer.Screen name="Orders" component={OrdersScreen} />
        <Drawer.Screen name="Reports" component={ReportsScreen} />
        <Drawer.Screen name="Log Out" component={LogOutScreen} />
      </Drawer.Navigator>
    )
  }
}

export default Dashboard