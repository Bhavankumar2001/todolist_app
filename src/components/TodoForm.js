import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      
      // prevent default action
        e.preventDefault();
        if (value) {
          // add todogit push -u origin main
          addTodo(value);
          // clear form after submission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="TodoForm">
    <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Add what you need...' />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )
}
