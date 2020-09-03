import React from 'react';
import styled from 'styled-components';

const ChoiceWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  margin-bottom: 30px;
  max-width: 500px;
`;

const ChoiceRadio = styled.input`
  display: inline-block;
  margin-right: 13px;
  cursor: pointer;
`;

const ChoiceLabel = styled.label`
  cursor: pointer;
`;

export const Choices = ({ openItem, choice, changeChoices }) => (
  <>
    <h3>Выбирайте:</h3>
    <ChoiceWrap>
      {openItem.choices.map((item, i) => (
        <ChoiceLabel key={i}>
          <ChoiceRadio type="radio" name="choices" checked={choice === item} value={item} onChange={changeChoices} />
          {item}
        </ChoiceLabel>
      ))}   
    </ChoiceWrap>
  </>
);
