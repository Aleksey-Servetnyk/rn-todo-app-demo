import React from 'react'
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native'

export const EditModal = ({ visible }) => {
    return (
        <Modal visible={visible}>
            <View>
                <TextInput />
                <Button title='Cancel' />
                <Button title='Save' />
            </View>
        </Modal>
    )
}
