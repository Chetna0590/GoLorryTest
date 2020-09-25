import React, { useEffect } from 'react'
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
import { getReports } from './Redux/action'
import { createSelector, createStructuredSelector } from 'reselect'

const Reports = props => {
  const { getReports, reportsList } = props

  useEffect(() => { getReports() }, [])
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={reportsList ? reportsList : []}
          contentContainerStyle={{ marginBottom: 20 }}
          renderItem={({ item }) => {
            const { receipt_no, origin, destination } = item
            return <TouchableOpacity style={{ borderBottomColor: 'lightgrey', borderBottomWidth: 1 }}>
              <View style={{ padding: 15 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16, flex: 1 }}> Receipt# {receipt_no}</Text>
                <View style={{ flexDirection: 'row', marginTop:10 }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 14 }}> {origin} </Text>
                  <Icon name='arrowright' size={20} color='#367030' style={{fontWeight:'bold'}} />
                  <Text style={{ fontWeight: 'bold', fontSize: 14 }}> {destination} </Text>
                </View>
              </View>
            </TouchableOpacity>
          }}
          keyExtractor={(item, index) => index.toString()}
        />
    </SafeAreaView>
  );
}
const states = createStructuredSelector({
  reportsList: createSelector([({ DashboardReducer }) => DashboardReducer.getIn(['reports', 'reports_list'])], reportsList => reportsList || [])
})
export default connect(states, { getReports })(Reports)