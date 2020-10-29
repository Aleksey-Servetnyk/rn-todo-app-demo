import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null)      // screen navigation state
  const [todos, setTodos] = useState([])

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
    setTodos(prev => prev.filter(todo => todo.id != id))
  }

  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={(id) => {
      setTodoId(id)
    }} />
  )

  if (todoId) {
    content = <TodoScreen />
  }

  return (
    <View>
      <Navbar title="Todo App"/>
      <View style={styles.container}>

          {/* <ScrollView>
            {todos.map(todo => (
              <Todo todo={todo} key={todo.id} /> 
            ))}
          </ScrollView> */}

          { content }

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
