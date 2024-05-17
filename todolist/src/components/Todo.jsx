import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({task,toggleComplete,deleteTodo, editTodo}) => {
  return (
    <>
    <div className="Todo">
        <p className={`${task.completed ? "completed" : "incompleted"}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
        <div>
            <FontAwesomeIcon onClick={()=> editTodo(task.id)} className='edit-icon' icon={faPenToSquare}/>
            <FontAwesomeIcon onClick={()=> deleteTodo(task.id)} className='delete-icon' icon={ faTrash}/>
        </div>
    </div>
    </>
    
  )
}

export default Todo;