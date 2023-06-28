import React,{ useState } from 'react'

export const EditTodoForm = ({editTodo,task}) => {
    const[ value, setValue ] = useState(task.task)

    const handleSubmit = e =>{
        e.preventDefault();
        editTodo(value,task.id);
        setValue("")
    } 

    const handleChange = e => {
        setValue(e.target.value);
      };
    return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='Update the task' size='50' className='todo-input' value={value} onChange={handleChange} />
        <button type='submit' className='todo-btn'>Update Task</button>

    </form>
  )
}
