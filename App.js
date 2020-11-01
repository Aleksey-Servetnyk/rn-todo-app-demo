import React, {useState} from 'react';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { MainLayout } from './src/MainLayout'
import { TodoState } from './src/context/todo/TodoState'

async function loadApplication () {
  await Font.loadAsync({
    'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
  })
}

export default function App() {
  const [isRedy, setIsRedy] = useState(false)     // app redy flug state
  if (!isRedy) {                                  // waiting load the application
    return (
      <AppLoading 
        startAsync={loadApplication} 
        onError={err => console.log(err)}
        onFinish={() => setIsRedy(true)}
      />
    )
  }

  return (
    <TodoState><MainLayout /></TodoState>
  );
}

