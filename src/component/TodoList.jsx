import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListWrapper = styled.div`
  height: auto;
`

function TodoList(props) {
  const { todos, onRemove, onToggle } = props;

  return (
    <TodoListWrapper>
      {todos.sort((a, b) => new Date(a.date) - new Date(b.date)).map(todo => <TodoItem key={todo.id} todo={todo} onRemove={onRemove} onToggle={onToggle} />) }
    </TodoListWrapper>
  );
}

export default TodoList;