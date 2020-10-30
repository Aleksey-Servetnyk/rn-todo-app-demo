import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { THEME } from '../theme'
import { AppCard } from '../components/ui/AppCard'


export const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>

            <AppCard>
                <Text>{todo.title}</Text>
                <Button title='Edit'/>
            </AppCard>

            <Text>{todo.title}</Text>
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