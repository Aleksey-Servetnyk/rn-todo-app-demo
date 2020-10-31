import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, FlatList, Alert } from 'react-native';
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

export default function App() {
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

  let content = (
    <MainScreen 
      todos={todos} 
      addTodo={addTodo} 
      removeTodo={removeTodo} 
      // openTodo={(id) => {
      //   setTodoId(id)
      // }} 
      openTodo={setTodoId}
    />
  )

  if (todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen onRemove={removeTodo} goBack={() => setTodoId(null)} todo={selectedTodo} />
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
