import React from 'react';
import styled, { css } from 'styled-components';
import { TiHeartFullOutline, TiHeartOutline, TiDelete, TiPencil, TiTickOutline, TiTick, TiTimes, TiTimesOutline } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

const TodoItemWrapper = styled.div`
  padding: 0.3rem;
  display: flex;
  align-items: center;
  position: relative;
  height: auto;

  .date{
    margin-right: 10px;
  }

  .remove {
    svg {
      position: absolute;
      right: 10px;
      bottom: 5px;
    }
  }
  
  .edit {
    svg {
      font-size: 20px;
      position: absolute;
      right: 35px;
      bottom: 7px;
    }
  }

  svg {
    font-size: 25px;
    color: #fc7aa1;
    cursor: pointer;
    margin: 1px ;
  }

  svg:hover {
    color: #ffb1c8;
    transition: .4s;
  }

  .date {
    position: absolute;
    right: 55px;
    ${props => props.checked &&
      css`
    color: #a987c9;
      text-decoration: line-through;
      text-decoration-color: #fc7aa1;
      `
    }
  }


  .text {
    width: 300px
    ${props => props.checked &&
      css`
    color: #a987c9;
      text-decoration: line-through;
      text-decoration-color: #fc7aa1;
      `
    }

  }
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  `;

function TodoItem(props) {
  const {onToggle, onRemove, todo: { date, id, title, checked } } = props; 
  const navigate = useNavigate();

  
  
  return (
    <TodoItemWrapper checked={checked}>
      <Checkbox checked={checked}
        onClick={() => {onToggle(id)}}
      >
        {checked? <TiTick /> : <TiTickOutline />}
      </Checkbox>
        <div className='date'>{date}</div>
        <div className='text'>{title}</div>
        <div className='edit'
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
        >
          <TiPencil />
        </div>
        <div className='remove'
          onClick={() => {onRemove(id);}}
          >
          {checked? <TiTimes /> : <TiTimesOutline />}
        </div>
    </TodoItemWrapper>
  );
}

export default TodoItem;