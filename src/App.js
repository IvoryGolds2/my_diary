import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './component/MainPage';
import TodoWriterPage from './component/TodoWriterPage';
import TodoItem from './component/TodoItem';
import TodoList from './component/TodoList';
import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GloalStyle = createGlobalStyle`
  .designed-scroll::-webkit-scrollbar {
    width: 6px;
  }

  .designed-scroll::-webkit-scrollbar-thumb {
    background-color: #FFF7A4;
    border-radius: 2.5px;
  }

  .app-title {
    color: #8F49CF;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    width: 512px;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFCADA;
  }

  .list{
    color: #8F49CF;
    height: 500px;
    background-color: #B4F7ED;
    text-align: center;
    justify-content: center;
    align-items: center;
  }

  .btn {
    width: 512px;
    height: 50px;
    background-color: #FFCADA;
    border: 0;
    cursor: pointer;
    color: #8F49CF;
    font-weight: 400;
    opacity: 1;
  }
  `
  
const AppWrapper =styled.div`
.todoList {
  margin: 10px 10px 5px 10px ;
  font-size: 20px;
  text-align: left;
}

.completeList {
  margin: 0 10px 5px 10px ;
  font-size: 20px;
  text-align: left;
}

.list {
  overflow: auto;
}
`


function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const dbTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(dbTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const nextId = useRef(1);

  const handleInsert = useCallback((date, title, content) => {
    const todo = {
      id:nextId.current,
      date,
      title,
      content,
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

  const todolist = todos.filter((truetodos) => {
    return !truetodos.checked
  });  

  const complete = todos.filter((truetodos) => {
    return truetodos.checked
  });

  console.log(todolist.length);

  return (
    <AppWrapper>
      <BrowserRouter>
        <GloalStyle />
          <Routes>
            <Route path='/' element={
              <MainPage>
                <div>
                  <div className='todoList'>Todo List ({todolist.length})</div>
                  <TodoList todos={todolist} onRemove={handleRemove} onToggle={handleToggle} />
                  <div className='completeList'>Complete List ({complete.length})</div>
                  <TodoList todos={complete} onRemove={handleRemove} onToggle={handleToggle} />
                </div>
              </MainPage>} 
            />
            <Route path='/write' element={<TodoWriterPage onWriterPage={handleInsert}/>} />
          </Routes>
      </BrowserRouter>
      </AppWrapper>
  );
}

export default App;
