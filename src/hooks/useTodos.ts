import { useEffect, useState } from 'react';
import { Todo } from '../types/todo';
import { dummyData } from '../data/todos';

export default function useTodos() {
  const [todos, setTodos] = useState(() => {
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem('todos') || '[]'
    );
    return savedTodos;
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addNewTodo(input: string) {
    setTodos((prevTodos) => [
      { id: Date.now(), title: input, completed: false },
      ...prevTodos,
    ]);
  }
  function addDummyData() {
    localStorage.setItem('todos', JSON.stringify(dummyData));
    const savedTodos: Todo[] = JSON.parse(
      localStorage.getItem('todos') || '[]'
    );
    setTodos(savedTodos);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }

  function deleteAllCompleted() {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.completed === false)
    );
  }

  return {
    todos,
    setTodoCompleted,
    addNewTodo,
    addDummyData,
    deleteTodo,
    deleteAllCompleted,
  };
}
