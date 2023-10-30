import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addTodo, removeTodo } from '../features/todoSlice'
function TodoRedux() {
  const [input,setInput] = useState('')
  const dispatch = useDispatch()
  const todos = useSelector((state)=>state.todos)
  const handleAddTodo = (e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }
  const handleDelete = (id)=>{
    dispatch(removeTodo(id))
  }
  return (
    <div>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
      <button  onClick={handleAddTodo}>Add todo</button>
      <ul>
        {
          todos.map((todo)=>{
            return <li key={todo.id}>{todo.text} <button onClick={()=>handleDelete(todo.id)}>Delete</button></li>
          })
        }
      </ul>
    </div>
  )
}

export default TodoRedux
