import React from 'react';
import styled from "styled-components";

const Wrapper = styled.div`
  width: 375px;
  margin: 0 auto;
  overflow-y: auto;
  border: 7px solid black;

  .app-title {
  background-color: #f8d4e5;
  color: black;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  background-color: #fbfce4;
  height: 760px;
}
`


function DiaryTemplate(props) {
  const { children } = props;

  return (
    <Wrapper>
      <div className='app-title'>IVORY</div>
      <div className='content'>{children}</div>
    </Wrapper>
  );
}

export default DiaryTemplate;