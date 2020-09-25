import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
import { getOrderDetails } from './Redux/action'
import { createSelector, createStructuredSelector } from 'reselect'

const Orders = props => {
  const { getOrderDetails, ordersList, navigation } = props

  useEffect(() => { getOrderDetails() }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', padding: 15, justifyContent: 'center', borderBottomColor: 'lightgrey', borderBottomWidth: 1 }} >
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#367030' }}> Total Orders : {ordersList.length}</Text>
        </View>
        <FlatList
          data={ordersList ? ordersList : []}
          contentContainerStyle={{ marginBottom: 20 }}
          renderItem={({ item }) => {
            const { order_no, origin, destination, loading_date } = item
            return <TouchableOpacity style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1 }}>
              <View style={{ padding: 15, flexDirection : 'row', flex:1}}>
                <View style={{flex:0.9}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, flex: 1 }}> Order# {order_no} </Text>
                  <View style={{ flexDirection: 'row', marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}> {origin} </Text>
                    <Icon name='arrowright' size={20} color='#367030' style={{ fontWeight: 'bold' }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 14 }}> {destination} </Text>
                  </View>
                  <Text style={{ fontWeight: 'bold', fontSize: 16, flex: 1 }}> Loading Date: {loading_date} </Text>
                </View>
                <TouchableOpacity style={{ flex: 0.1, justifyContent:'center' }} onPress={() => navigation.navigate('Order Details',{item})}>
                      <Icon name='rightcircleo' size={20} color='#367030' style={{ fontWeight: 'bold' }} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}
const states = createStructuredSelector({
  ordersList: createSelector([({ DashboardReducer }) => DashboardReducer.getIn(['orders', 'orders_list'])], ordersList => ordersList || [])
})
export default connect(states, { getOrderDetails })(Orders)