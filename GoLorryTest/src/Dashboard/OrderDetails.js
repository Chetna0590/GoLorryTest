import React from 'react'
import { View, Text, SafeAreaView, Label, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { connect } from 'react-redux'
import { getTrucks, getDrivers } from './Redux/action'
import { createSelector, createStructuredSelector } from 'reselect'
import { Picker } from 'native-base';
class OrderDetails extends React.Component {

    static navigationOptions = ({ navigation }) => {
        let goBack = navigation.goBack
        return {
            title: 'Order Details',
            headerLeft: () => {
                return <TouchableOpacity onPress={() => goBack()} style={{ felx: 1, flexDirection: 'row', marginLeft: 10 }}>
                    <Icon color='white' name='arrowleft' size={30} style={{ fontWeight: 'bold' }} />
                </TouchableOpacity>
            }
        }
    }

    state={
        selectedTruck : '',
        selectedDriver: '',
        submitted:false
    }

    componentDidMount() {
        this.props.getTrucks()
        this.props.getDrivers()
    }

    getAvailblability = (checkList) => {
        let filteredList = checkList.filter(item => {
            return item.status == 'available'
        })

        return filteredList
    }

    onSubmit = () =>{
        this.setState({submitted:true})
        setTimeout(()=>{this.setState({submitted:false}),3000})
    }

    render() {
        const { trucksList, driversList, route, navigation } = this.props
        const { item } = route.params
        let goBack = navigation.goBack
        const displayItems = [{ label: 'Booked Date:', value: item.booking_date },
        { label: 'Amount:', value: item.price }, { label: 'Weight:', value: item.weight }]
        const pickers = [{ label: 'Truck:', value: this.getAvailblability(trucksList) },
        { label: 'Driver:', value: this.getAvailblability(driversList) }]
        return (
            <SafeAreaView style={{ flex: 1 }}>
                {this.state.submitted?<View style={{padding:15, backgroundColor:'lightgreen'}}>
                    <Text style={{color:'white',fontSize:15, fontWeight:'bold'}}>Assigned Successfully.</Text>
                </View>:null}
                <View style={{ flexDirection: 'row', padding: 15, borderBottomColor: 'lightgray', borderBottomWidth: 1 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {item.origin} </Text>
                    <Icon name='arrowright' size={20} color='#367030' style={{ fontWeight: 'bold' }} />
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {item.destination} </Text>
                    <Text style={{ fontSize: 16, marginLeft: 20 }}> Loading Date:</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, marginLeft: 5 }}>{item.loading_date} </Text>
                </View>
                <View style={{ flexDirection: 'row', padding: 15, marginTop: 5 }}>
                    <Text style={{ fontSize: 16 }}> Materials: </Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}> {item.materials.toString()} </Text>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15 }}>
                    {displayItems.map(({ label, value }) => <View style={{ flexDirection: 'column', width: '50%', marginVertical: 15 }}>
                        <Text style={{ fontSize: 14 }}>{label}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{value}</Text>
                    </View>)}
                </View>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', padding: 15 }}>
                    <View style={{ flexDirection: 'column', width: '50%', marginVertical: 15 }}>
                        <Text style={{ fontSize: 14 }}> Truck: </Text>
                        <View style={{ borderRadius: 5, borderColor: 'lightgray', borderWidth: 1, marginRight:10, marginTop:10 }}>
                            <Picker
                                note
                                mode="dropdown"
                                selectedValue={this.state.selectedTruck}
                                onValueChange={(selectedTruck)=>this.setState({selectedTruck})}>
                                {this.getAvailblability(trucksList).map((item) => <Picker.Item label={item.truck_no} value={item.truck_no} />)}
                            </Picker>
                        </View>

                    </View>
                    <View style={{ flexDirection: 'column', width: '50%', marginVertical: 15 }}>
                        <Text style={{ fontSize: 14 }}>Driver:</Text>
                        <View style={{ borderRadius: 5, borderColor: 'lightgray', borderWidth: 1, marginRight:10, marginTop:10 }}>
                            <Picker
                                note
                                mode="dropdown"
                                selectedValue={this.state.selectedDriver}
                                onValueChange={(selectedDriver)=>this.setState({selectedDriver})}>
                                {this.getAvailblability(driversList).map((item) => <Picker.Item label={item.driver} value={item.driver} />)}
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', padding:30, justifyContent:'space-between' }}>
                <TouchableOpacity style={{ flexDirection:'column',width: '35%',borderRadius: 25, marginTop: 30, backgroundColor: 'black' }}  onPress={()=>goBack()}>
                        <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 16, color: 'white', textAlign: 'center' }}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection:'column',width: '35%', borderRadius: 25, marginTop: 30, backgroundColor: 'black' }} onPress={()=>this.onSubmit()}>
                        <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 16, color: 'white', textAlign: 'center' }}>Assign</Text>
                </TouchableOpacity>
                </View>
            </SafeAreaView>
        )
    }


}


const states = createStructuredSelector({
    trucksList: createSelector([({ DashboardReducer }) => DashboardReducer.getIn(['trucks', 'trucks_list'])], trucksList => trucksList || []),
    driversList: createSelector([({ DashboardReducer }) => DashboardReducer.getIn(['drivers', 'drivers_list'])], driversList => driversList || [])
})
export default connect(states, { getTrucks, getDrivers })(OrderDetails)