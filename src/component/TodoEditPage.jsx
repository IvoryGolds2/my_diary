import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

const TodoWriterPageWrapper = styled.form`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  overflow: hidden;
  border-radius: 20px;
  border: 5px solid  #FFF7A4;
  
  .app-title {
  border-bottom: 5px solid  #FFF7A4;
  }

  .btn {
  border-top: 5px solid  #FFF7A4;
  }

  .list {
    text-align: center;
  }

  .date {
    margin-top: 20px;
    width: 450px;
    height: 30px;
    cursor: pointer;
    opacity: .5;
    color: #450085;
    border: none;
    }

  .title {
    margin-top: 15px;
    width: 450px;
    height: 400px;
    opacity: .5;
    color: #450085;
    border: none;
  }
`

function TodoEditPage({todos, onEditPage}) {
  
  const { editId } = useParams();

  const target = todos.find((todo) => {
    return editId === todo.id
  });
  console.log(target.title);
  
  const editDate = target.date
  const editTitle = target.title

  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  
  const handleChange1 = (e) => {
    setDate(e.target.value);
  }; 

  const handleChange2 = (e) => {
    setTitle(e.target.value);
  }; 

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (title.length < 1){
      alert('다시 입력해 주세요')
      return;
    }
    
    onEditPage(date, title);
    navigate("/");
    setDate('');
    setTitle('');
  };

  return (
    <TodoWriterPageWrapper onSubmit={handleSubmit}>
      <div className='app-title'>My Todo List</div>
      <div className='list'>
        <input className='date' type="date" defaultValue={editDate} onChange={handleChange1}>
        </input>
        <input className='title' type="text" defaultValue={editTitle} onChange={handleChange2}>
        </input>    
      </div>
      <button 
      className='btn' 
      type='submit'
      >
        Registration
      </button>
    </TodoWriterPageWrapper>
  );
}

export default TodoEditPage;