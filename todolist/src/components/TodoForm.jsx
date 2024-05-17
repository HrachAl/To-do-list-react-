import React from 'react'
import { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value,setValue] = useState("")

    function handleSubmit (e) {
        e.preventDefault();
        if(!value ) {
            return null
        }

        addTodo(value);

        setValue("")
    }
  return (
    <>
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" value={value}  className='todo-inp' placeholder='What is the task today?' 
        onChange={(e)=> setValue(e.target.value)}/>
        <button className='todo-btn'>Add Task</button>

    </form>
    
    </>
  )
}

export default TodoForm