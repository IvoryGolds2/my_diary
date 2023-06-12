import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './component/MainPage';
import TodoWriterPage from './component/TodoWriterPage';
import TodoItem from './component/TodoItem';
import TodoList from './component/TodoList';
import { useCallback, useEffect, useRef, useState } from 'react';





function App() {
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
  //   setTodos(dbTodos);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  const nextId = useRef(4);

  const handleInsert = useCallback((date, title, content) => {
    const todo = {
      id:nextId.current,
      date,
      title,
      content
    }
    setTodos(todos => todos.concat(todo));
    nextId.current += 1;
  },[]);

  const handleRemove = useCallback((id) =>{
    setTodos(todos => todos.filter((todo) => todo.id !== id));
  }, []);

  const handleToggle = useCallback((id) => {
    setTodos(todos => todos.map((todo) => 
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    ));
  }, [])

  // console.log(todos);
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <MainPage>
              <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle} />
            </MainPage>} 
          />
          <Route path='/write' element={<TodoWriterPage onWriterPage={handleInsert}/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
