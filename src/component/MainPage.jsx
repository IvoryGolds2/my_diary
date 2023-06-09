import React from 'react';
import styled from 'styled-components';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';
import TodoWriterPage from './TodoWriterPage';

const MainPageWrapper = styled.div`
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
  }

  .btn {
    width: 512px;
    height: 50px;

  }
`

function MainPage(props) {
  const navigate = useNavigate();
  return (
    <>
        <MainPageWrapper>
        <div className='app-title'>My Todo List</div>
        <div className='list'><TodoList /></div>
        <button 
        className='btn' 
        type='button'
        onClick={() => {
          navigate("/write");
        }}
        >
          작성하기
        </button>
        </MainPageWrapper>
    </>
  );
}

export default MainPage;