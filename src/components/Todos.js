import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
  return (
    <>
        <h3>Todos List</h3>
        <div className="row">
        {props.todos.length===0?"No todos to display"
          :props.todos.map((todo)=>{
            return <Todo todo={todo} kye={todo.sno} onDelete={props.onDelete} />
          })
        }
      </div>
    </>
  )
}

export default Todos
 