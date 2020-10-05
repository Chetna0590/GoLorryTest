import React, { Component } from 'react'
import { TouchableHighLight, Dimensions, Text, View, StyleSheet, Image, ActivityIndicator, TouchableOpacity } from 'react-native'
import { TextBox } from '../Components/index'
import { connect } from 'react-redux'
import { createStructuredSelector, createSelector } from 'reselect'
import { StackActions } from '@react-navigation/native'

class Login extends Component {
    state = {
        userId: '',
        pwd: ''
    }

    performLogout = async() =>{
        
    }

    render() {
        const windowWidth = Dimensions.get('window').width
        const {navigation} = this.props
        return (
            <View style={styles.body}>
                <Image style={{ width: (windowWidth * 0.75), height: 120, marginBottom: 50, marginTop: -30 }} source={require('./logo.png')} />
                <TextBox placeholder={'User Id'} />
                <TextBox placeholder={'Password'} />
                <TouchableOpacity style={{ width: '35%', borderRadius: 25, marginTop: 30, backgroundColor: 'black' }} onPress={() => navigation.navigate('Home')}>
                        <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 16, color: 'white', textAlign: 'center' }}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default Login

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white'
    },
    disabled: {
        opacity: 0.5
    }
})