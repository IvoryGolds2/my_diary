import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  min-height: 320px;
  overflow-y: auto;
  /* background-color: pink; */
`

function TodoList(props) {
  const { todos, onRemove, onToggle } = props;
  console.log(todos);
  return (
    <TodoListWrapper>
      {todos.map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />)}
    </TodoListWrapper>
  );
}

export default TodoList;