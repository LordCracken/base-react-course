import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunction';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1400px) {
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

const Item = styled.li`
  position: relative;
  z-index: 1;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  width: 30%;
  max-width: 400px;
  min-width: 276px; 
  height: 155px;
  font-size: 30px;
  color: white;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    background-color: #000000;
    opacity: 50%;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px black;
    &:after {
      opacity: 0
    }
  }
  @media (max-width: 1400px) {
    margin-top: 15px;
    margin-right: 15px;
  }
  @media (max-width: 480px) {
    margin-right: 0;
    min-width: 250px;
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map(item => (
      <Item 
        key={item.id}
        img={item.img}
        onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <strong>{formatCurrency(item.price)}</strong>
      </Item>
    ))}
  </List>
);
