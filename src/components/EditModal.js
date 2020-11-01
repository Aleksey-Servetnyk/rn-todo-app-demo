import React, {useState} from 'react'
import { View, StyleSheet, TextInput, Button, Modal, Alert } from 'react-native'
import { THEME } from '../theme'
import { AppButton } from './ui/AppButton'

export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)       // local state for Todo Name

    const saveHandler = () => {                     // saving changed Todo Name with validation
        if (title.trim().length < 3) {
            Alert.alert('Error!', `Todo Name minimal lenght is 3 sumbols. Now it: ${title.trim().length} sumbols.`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal 
            visible={visible} 
            animationType='slide'
            transparent={false}
        >
            <View style={styles.wrap}>
                <TextInput 
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder='Enter Todo Name, pls'
                    autoCapitalize='none'
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons} >
                    <AppButton onPress={onCancel} color={THEME.DANGER_COLOR}>Cancel</AppButton>
                    <AppButton onPress={saveHandler}>Save</AppButton>
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
