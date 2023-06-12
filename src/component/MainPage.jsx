import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TodoList from './TodoList';


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
        <div className='list'>{props.children}</div>
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