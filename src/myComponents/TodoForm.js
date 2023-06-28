import React,{ useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const[ value, setValue ] = useState("")

    const handleSubmit = e =>{
        e.preventDefault();
        addTodo(value);
        setValue("")
    } 

    const handleChange = e => {
        setValue(e.target.value);
      };
    return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter the task' size='50' className='todo-input' value={value} onChange={handleChange} />
        <button type='submit' className='todo-btn'>Add Task</button>

    </form>
  )
}
