import React from 'react'
import { Button, View, Text, SafeAreaView } from 'react-native'
import Modal from 'react-native-modal'

class Logout extends React.Component {
    state = {
        isVisible: false
    }

    componentDidMount() {
        this.setState({ isVisible: true })
    }
    render() {
        const { navigation } = this.props
        let popToTop = navigation.popToTop
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {<Modal isVisible={this.state.isVisible}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ width: '70%', backgroundColor: 'White' }}>
                                <Text>Are you sure you want to Log out?</Text>
                                <View style={{ flexDirection: 'row' }}>
                                    <Button style={{ backgroundColor: 'black', marginRight: 10 }} title="No" onPress={() => this.setState({ isVisible: false })} />
                                    <Button style={{ backgroundColor: 'black' }} title="Yes" onPress={() => popToTop()} />
                                </View>
                            </View>
                        </View>
                    </Modal>}

                </View>
            </SafeAreaView>
        )
    }


}


export default Logout