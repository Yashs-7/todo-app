import { faPenToSquare, faTrashAlt, faTrashCan } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Todo = ({task,toggleComplete,deleteTodo,editTodo}) => {
  return (
    <div className='Todo'>
      <p onClick={()=> toggleComplete(task.id)} className={`${task.completed?'completed':""}`}>{task.task}</p>
      <FontAwesomeIcon icon={faPenToSquare} onClick={()=>{editTodo(task.id)}}/>
      <FontAwesomeIcon icon={faTrashCan} onClick={()=>{deleteTodo(task.id)}}/>
    </div>
  )
}

