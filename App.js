import React, {useState} from 'react';
import { Alert } from 'react-native';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';

async function loadApplication () {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isRedy, setIsRedy] = useState(false)     // app redy flug state
  if (!isRedy) {                                  // waiting load the application
    return <AppLoading 
      startAsync={loadApplication} 
      onError={err => console.log(err)}
      onFinish={() => setIsRedy(true)}
    />
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
    content = 
      <TodoScreen 
        onRemove={removeTodo} 
        goBack={() => setTodoId(null)} 
        todo={selectedTodo} 
        onSave={updateTodo}  
      />
  }

  return (
    <TodoState><MainLayout /></TodoState>
  );
}

