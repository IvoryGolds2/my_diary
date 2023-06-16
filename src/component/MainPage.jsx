import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import TodoList from './TodoList';

const MainPageWrapper = styled.div`
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
`

function MainPage(props) {
  const navigate = useNavigate();
  
  return (
    <>
      <MainPageWrapper>
        <div className='app-title'>My Todo List</div>
        <div className='list designed-scroll designed-scroll-thumb'>{props.children}</div>
        <button 
          className='btn' 
          type='button'
          onClick={() => {
            navigate("/write");
          }}
        >
          Make a list
        </button>
      </MainPageWrapper>
    </>
  );
}

export default MainPage;