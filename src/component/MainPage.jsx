import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TodoList from './TodoList';


const MainPageWrapper = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 6rem;
  border: solid 5px black;
  overflow: hidden;



  .app-title {
    color: black;
    border-bottom: solid 5px black;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    width: 512px;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #ffcdea;
  }
  .list{
    height: 500px;
    border-bottom: solid 5px black;
    background-color: #ffffea;

  }

  .btn {
    width: 512px;
    height: 50px;
    background-color: #ffcdea;
    border: 0;
    cursor: pointer;
  }
`

function MainPage(props) {

  const navigate = useNavigate();


  return (
    <>
      <MainPageWrapper>
        <button type='button' className='app-title'>My Todo List</button>
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