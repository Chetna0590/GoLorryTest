import React from 'react'
import { Button } from 'native-base'
import { Text, StyleSheet, ActivityIndicator, View } from 'react-native'

export const PrimaryButton = props => {
    const { label, style, onClick, disabled, loading = false } = props
    return (
        <Button disabled={disabled} onPress={onClick} primary rounded style={[styles.primary, style]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text styel={styles.label}> {label} </Text>
                {loading && <ActivityIndicator color='white' size={30} style={{ marginLeft: 10 }} />}
            </View>
        </Button>
    )
}
const styles = StyleSheet.create({
    label: {
        fontSize: 15,
        color: 'white',
        fontWeight: 'bold'
    },
    primary: {
        backgroundColor: 'black',
        justifyContent: 'center'
    }
})