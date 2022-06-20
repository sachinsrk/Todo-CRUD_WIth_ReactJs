import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Todos from './components/Todos';
import Addtodo from './components/Addtodo';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  let initTodo;
  if (localStorage.getItem('todo') === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem('todo'))
  }
  const onDelete = (todo) => {
    console.log('on delete', todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem('todo', JSON.stringify(todos))
  }


  const addTodo = (title, desc) => {
    // console.log("adding this ",title,desc )
    let sno
    if (todos.length === 0) {
      sno = 0
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(initTodo)
  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todos))
  }, [todos])


  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<> <Addtodo addTodo={addTodo} />
            <div className='container  w-50'>
              <Todos todos={todos} onDelete={onDelete} />
            </div>
          </>} />


          <Route path='/about' element={<About/> } />



        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
