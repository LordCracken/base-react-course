import React from 'react';
import styled from 'styled-components';
import trashImage from '../image/trash.svg';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 30px;
  margin-right: 13px;
  min-width: 47px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  background-color: transparent;
  background-image: url(${trashImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const OrderListItem = () => (
  <OrderItemStyled>
    <ItemName>JS Burger</ItemName>
    <span>2</span>
    <ItemPrice>750 Р</ItemPrice>
    <TrashButton />
  </OrderItemStyled>
);
