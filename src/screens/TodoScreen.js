import React, { useState } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'
import { EditModal } from '../components/EditModal'


export const TodoScreen = ({ goBack, todo, onRemove }) => {
    const [modal, setModal] = useState(false)   // Modal Window Visibility State


    return (
        <View>

            <EditModal />

            <AppCard style={styles.card}>
                <Text style={styles.title}>{todo.title}</Text>
                <Button title='Edit' onPress={() => setModal(true)} />
            </AppCard>

            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button 
                        title='Back'
                        color={THEME.GREY_COLOR} 
                        onPress={goBack} 
                    />
                </View>
                <View style={styles.button}>
                    <Button 
                        title='Remove'
                        color={THEME.DANGER_COLOR}
                        onPress={() => onRemove(todo.id)} 
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        marginBottom: 20,
        padding: 15
    },
    button: {
        width: '40%'
    },
    title: {
        fontSize: 20
    }
})