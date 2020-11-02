import React, { useContext, useReducer } from "react";
import { Alert } from "react-native";
import {
  ADD_TODO,
  CLEAR_ERROR,
  FETCH_TODOS,
  HIDE_LOADER,
  REMOVE_TODO,
  SHOW_ERROR,
  SHOW_LOADER,
  UPDATE_TODO,
} from "../types";
import { TodoContext } from "./todoContext";
import { todoReducer } from "./todoReducer";
import { ScreenContext } from "../screen/screenContext";

export const TodoState = ({ children }) => {
  const initialState = {
    todos: [],
    loading: false,
    error: null,
  };
  const { changeScreen } = useContext(ScreenContext);
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = async (title) => {
    const responce = await fetch(
      "https://rn-todo-app-30322.firebaseio.com/todos.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title }),
      }
    );
    const data = await responce.json();
    console.log("ID", data.name);
    dispatch({ type: ADD_TODO, title, id: data.name });
  };
  const removeTodo = (id) => {
    const todo = state.todos.find((t) => t.id === id);
    Alert.alert(
      "Deleting the element",
      `Are you sure you want to delete the "${todo.title}" ?`,
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: () => {
            changeScreen(null);
            dispatch({ type: REMOVE_TODO, id });
          },
        },
      ],
      { cancelable: false }
    );
  };

  const fetchTodos = async () => {
    showLoader();
    const responce = await fetch(
      "https://rn-todo-app-30322.firebaseio.com/todos.json",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await responce.json();
    //console.log("Fetch Data", data);
    const todos = Object.keys(data).map((key) => ({ ...data[key], id: key }));
    dispatch({ type: FETCH_TODOS, todos });
    hideLoader();
  };

  const updateTodo = (id, title) => dispatch({ type: UPDATE_TODO, id, title });
  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });
  const showError = (error) => dispatch({ type: SHOW_ERROR, error });
  const clearError = () => dispatch({ type: CLEAR_ERROR });

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        loading: state.loading,
        error: state.error,
        addTodo,
        removeTodo,
        updateTodo,
        fetchTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
