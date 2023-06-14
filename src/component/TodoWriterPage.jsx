import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';


const TodoWriterPageWrapper = styled.form`
    width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border: solid 5px black;
  overflow: hidden;


  .app-title {
    background: white;
    color: black;
    border-bottom: solid 5px black;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .list{
    height: 500px;
    border-bottom: solid 5px black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .btn {
    width: 512px;
    height: 50px;
    background-color: white;
    border: 0;
    cursor: pointer;
  }
  .date {
    margin-top: 10px;
    width: 450px;
    height: 30px;
    cursor: pointer;
  }
  .title {
    margin-top: 5px;
    width: 450px;
    height: 400px;
  }
  /* .content {
    margin-top: 15px;
    width: 450px;
    height: 400px;
  } */
`

function TodoWriterPage({onWriterPage}) {
  
  const navigate = useNavigate();
    const [date, setDate] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    // const [memo, setMemo] = useState({
    //   date: '',
    //   title: '',
    //   content: ''
    // });

    const handleChange1 = (e) => {
      setDate(e.target.value);
    }; 
    const handleChange2 = (e) => {
      setTitle(e.target.value);

    }; 
    // const handleChange3 = (e) => {
    //   setContent(e.target.value);
    // }; 

    const handleSubmit = (e) => {
      e.preventDefault();
      onWriterPage(date, title, content);
      
      if (title.length < 1){
        alert('다시 입력해 주세요')
        return;
      }
      
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
            등록
          </button>
    </TodoWriterPageWrapper>
  );
}

export default TodoWriterPage;