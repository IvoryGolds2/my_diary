import React from 'react';
import styled from 'styled-components';
import { TiHeartFullOutline, TiHeartOutline, TiDelete } from "react-icons/ti";

const TodoItemWrapper = styled.div`
  padding: 0.3rem;
  display: flex;
  align-items: center;
  .date{
    margin-right: 10px;
  }
  .remove {
    display: flex;
    align-items: center;
  }
  svg {
    font-size: 25px;
    color: red;
  }
  .text {
    margin-right: 5px;
  }
`;

const Checkbox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    font-size: 25px;
    color: red;
    margin-right: 5px;
    
  }
`





function TodoItem(props) {
  const {onToggle, onRemove, todo: { date, id, title, checked } } = props; 
  return (
    <TodoItemWrapper>
      <Checkbox checked={checked}
        onClick={() => {onToggle(id)}}
      >
        {checked? <TiHeartFullOutline /> : <TiHeartOutline />}
      </Checkbox>
      <div className='date'>{date}</div>
      <div className='text' >{title}</div>
      <div className='remove'
        onClick={() => {onRemove(id);}}
      >
        <TiDelete />
      </div>
    </TodoItemWrapper>
  );
}

export default TodoItem;