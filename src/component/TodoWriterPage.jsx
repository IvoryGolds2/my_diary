import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TodoWriterPageWrapper = styled.form`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  overflow: hidden;

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

function TodoWriterPage({onWriterPage}) {
  const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

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
      
      onWriterPage(date, title, content);
      navigate("/");
      setDate('');
      setTitle('');
      setContent('');
    };

  return (
    <TodoWriterPageWrapper onSubmit={handleSubmit}>
      <div className='app-title'>My Todo List</div>
      <div className='list'>
        <input className='date' type="date" value={date} onChange={handleChange1}/>
        <input className='title' type="text" value={title} onChange={handleChange2} placeholder='내용을 입력하세요'
        
        />
        {/* <input className='content' type="text" value={content} onChange={handleChange3} placeholder='내용을 입력하세요' /> */}
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

export default TodoWriterPage;