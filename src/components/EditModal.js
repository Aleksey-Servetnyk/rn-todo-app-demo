import React from 'react'
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native'
import { THEME } from '../theme'

export const EditModal = ({ visible, onCancel }) => {
    return (
        <Modal 
            visible={visible} 
            animationType='slide'
            transparent={false}
        >
            <View style={styles.wrap}>
                <TextInput 
                    style={styles.input}
                    placeholder='Enter Todo Name, pls'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons} >
                    <Button title='Cancel' onPress={onCancel} color={THEME.DANGER_COLOR} />
                    <Button title='Save' />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,                    // set modal window to hight of the screen
        justifyContent: 'center',
        alignItems: 'center'

    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: '80%'
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginTop: 10
    }
})
