import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text>{todo.title}</Text>
            <View style={styles.buttons}>
                <Button title='Back' onPress={goBack} />
                <Button 
                    title='Remove'
                    color='#ff0000'
                    onPress={() => console.log('To Remove')} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row'
    }
})