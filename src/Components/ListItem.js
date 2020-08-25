import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  z-index: 1;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  width: 400px;
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
`;

export const ListItem = ({ itemList }) => (
  <List>
    {itemList.map(item => (
      <Item 
        key={item.id}
        img={item.img}>
        <p>{item.name}</p>
        <strong>{item.price.toLocaleString('ru-RU', {style: 'currency', currency: 'RUB'})}</strong>
      </Item>
    ))}
  </List>
);
