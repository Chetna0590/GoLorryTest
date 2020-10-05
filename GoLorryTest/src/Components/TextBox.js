import { Item, Input } from 'native-base'
import React from 'react'

export const TextBox = props => {
    const { onChange, placeholder, secureTextEntry, onSubmitEditing } = props
    return (
        <Item>
            <Input onSubmitEditing={onSubmitEditing} placeholder={placeholder} onChangeText={onChange} secureTextEntry={secureTextEntry} />
        </Item>
    )
}