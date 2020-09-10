import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextItem } from '../Functions/ContextItem';

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Control = styled.div`
  display: flex;
`;

const CountInput = styled.input`
  width: 50px;
  text-align: center;
  font-size: 20px;
`;

const ButtonCount = styled.button`
  border: 1px solid #000000;
  padding: 0;
  width: 30px;
  height: 100%;
  background-color: transparent;
`;

export const CountItem = () => {
  const { counter: { count, setCount, onChange } } = useContext(ContextItem);
  return (
    <CountWrapper>
      <span>Количество</span>
      <Control>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(count - 1)}>-</ButtonCount>
        <CountInput type="number" min="1" value={count < 1 ? 1 : count} onChange={onChange} />
        <ButtonCount onClick={() => setCount(count + 1)}>+</ButtonCount>
      </Control>
    </CountWrapper>
  )
};
