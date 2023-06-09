import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const TodoWriterPageWrapper = styled.div`
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
  }

  .btn {
    width: 512px;
    height: 50px;
  }
  .date {
    margin-top: 10px;
    width: 450px;
  }
  .title {
    margin-top: 5px;
    width: 450px;
  }
  .content {
    margin-top: 15px;
    width: 450px;
    height: 400px;
  }
`

function TodoWriterPage(props) {
  const navigate = useNavigate();

  return (
    <TodoWriterPageWrapper>
          <div className='app-title'>My Todo List</div>
          <div className='list'>
            <input className='date' type="date" />
            <input className='title' type="text" />
            <input className='content' type="text" />
          </div>
          <button 
          className='btn' 
          type='button'
          onClick={() => {
            navigate("/");
          }}
          >
            등록
          </button>
    </TodoWriterPageWrapper>
  );
}

export default TodoWriterPage;