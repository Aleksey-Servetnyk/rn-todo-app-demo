import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button title='Back' onPress={goBack} />
                </View>
                <View style={styles.button}>
                    <Button 
                        title='Remove'
                        color='#ff0000'
                        onPress={() => console.log('To Remove')} 
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
    button: {
        width: '40%'
    }
})