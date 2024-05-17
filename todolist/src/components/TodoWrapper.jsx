import React from 'react'
import TodoForm from './TodoForm'
import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Todo from './Todo'
import TodoEditForm from './TodoEditForm'

const TodoWrapper = () => {
    
    const [todos,setTodos] = useState([])

    function addTodo (todo) {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
        console.log(todos);
    }

    const toggleComplete = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const deleteAlltodos = () =>{
        setTodos([])
    }
    
    const editTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
          )
        );
      }

      const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };
    
  return (
    <>
    <div className='TodoWrapper'>
        <h1>Get Things Done!!</h1>
        <TodoForm addTodo={addTodo}/>
        {todos.map((todo) =>
        todo.isEditing ? (
          <TodoEditForm editTodo={editTask} task={todo} />
        ) : (
          <Todo
          key={todo.id}
          task={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleComplete={toggleComplete}
          />
          
        )
      )}
        
    <button onClick={deleteAlltodos} className='delete'>Delete All Tasks</button>
    </div>
    </>
  )
}

export default TodoWrapper