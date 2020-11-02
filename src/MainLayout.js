import { StatusBar } from "expo-status-bar";
import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Navbar } from "./components/Navbar";
import { THEME } from "./theme";
import { MainScreen } from "./screens/MainScreen";
import { TodoContext } from "./context/todo/todoContext";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/screenContext";

export const MainLayout = () => {
  const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
  const { todoId, changeScreen } = useContext(ScreenContext);



  // const removeTodo = (id) => {
  //   const todo = todos.find((t) => t.id === id);
  //   Alert.alert(
  //     "Deleting the element",
  //     `Are you sure you want to delete the "${todo.title}" ?`,
  //     [
  //       {
  //         text: "Cancel",
  //         style: "cancel",
  //       },
  //       {
  //         text: "Delete",
  //         onPress: () => {
  //           setTodoId(null); // Back to main screen
  //           setTodos((prev) => prev.filter((todo) => todo.id != id));
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   );
  // };


  let content = (
    <MainScreen
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
      // openTodo={(id) => {
      //   setTodoId(id)
      // }}
      openTodo={changeScreen}
    />
  );

  if (todoId) {
    const selectedTodo = todos.find((todo) => todo.id === todoId);
    content = (
      <TodoScreen
        onRemove={removeTodo}
        goBack={() => changeScreen(null)}
        todo={selectedTodo}
        onSave={updateTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20,
  },
});
