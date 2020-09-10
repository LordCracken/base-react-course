import React, { useContext } from 'react';
import styled from 'styled-components';
import { ContextItem } from '../Functions/ContextItem';

const ToppingWrap = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  column-count: 2;
  column-gap: 15px;
  max-width: 500px;
`;

const ToppingLabel = styled.label`
  display: block;
  cursor: pointer;
`;

const ToppingCheckbox = styled.input`
  margin-right: 13px;
  cursor: pointer;
`;

export const Toppings = () => {
  const { toppings: { toppings, checkToppings } } = useContext(ContextItem);
  return (
    <>
      <h3>Добавки</h3>
      <ToppingWrap>
        {toppings.map((item, i) => (
          <ToppingLabel key={i}>
            <ToppingCheckbox type="checkbox" checked={item.checked} onChange={() => checkToppings(i)} />
            {item.name}
          </ToppingLabel>
        ))}   
      </ToppingWrap>
    </>
  )
};
