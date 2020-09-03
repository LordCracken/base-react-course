import React from 'react';
import styled from 'styled-components';

const ToppingWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-bottom: 30px;
  column-count: 2;
  column-gap: 15px;
`;

const ToppingLabel = styled.label`
  display: block;
  cursor: pointer;
`;

const ToppingCheckbox = styled.input`
  margin-right: 13px;
  cursor: pointer;
`;

export const Toppings = ({ toppings, checkToppings }) => (
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
);
