import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import { Navbar } from './src/Navbar'
import { AddTodo } from './src/AddTodo'

export default function App() {
  const [todos, setTodos] = useState([])

  // const AddTodo = (title) => {
  //    const newTodo = {
  //      id: Date.now().toString(),
  //      title: title
  //    }

  //   setTodos(prev => [...prev, {
  //     id: Date.now().toString(),
  //     title
  //   }])
  // }

  return (
    <View>
      <Navbar title="Todo App"/>
      <View style={styles.container}>
        <AddTodo />

          {/* <View>
            {todos.map(todo => {
              return (<Text>{todo.title}</Text>)
            })}
          </View> */}

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
