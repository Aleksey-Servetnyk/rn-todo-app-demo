import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Navbar } from './components/Navbar'
import { THEME } from './theme';

export const MainLayout = () => {
    const [todoId, setTodoId] = useState(null)      // screen navigation state
    const [todos, setTodos] = useState([])          // todos content state

    const addTodo = (title) => {
        // const newTodo = {
        //   id: Date.now().toString(),
        //   title: title
        // }
    
        setTodos(prev => [...prev, {
          id: Date.now().toString(),
          title
        }])
      }
    
      const removeTodo = (id) => {
    
        const todo = todos.find(t => t.id === id)
    
        Alert.alert(
          "Deleting the element",
          `Are you sure you want to delete the "${todo.title}" ?`,
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "Delete",
              onPress: () => {
                setTodoId(null)                                       // Back to main screen
                setTodos(prev => prev.filter(todo => todo.id != id))
              } 
            }
          ],
          { cancelable: false }
        );
      }
    
      const updateTodo = (id, title) => {             // update title by id
        setTodos(old => old.map(todo => {
          if (todo.id === id) {
            todo.title = title
          }
          return todo
        }))
      }
    


  return (
    <View>
        <Navbar title="Todo App"/>
        <View style={styles.container}>
            { content }
        </View>
        <StatusBar style="auto" />
    </View>
  )}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: THEME.PADDING_HORIZONTAL,
      paddingVertical: 20
    }
  });
  