import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemToppings = styled.span`
  flex-basis: 100%;
  display: block;
  font-size: 14px;
  color: #9A9A9A;
`;

const ItemPrice = styled.span`
  margin-left: 30px;
  margin-right: 13px;
  min-width: 95px;
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

export const OrderListItem = ({ order, index, deleteOrder, setOpenItem }) => {

  const refDeleteButton = useRef(null);

  return (
    <OrderItemStyled onClick={e => e.target === refDeleteButton.current ? null : setOpenItem({...order, index})}>
      <ItemName>{order.name} {order.choice}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton ref={refDeleteButton} onClick={() => deleteOrder(order)} />
      <ItemToppings>{order.topping && <span>{order.topping.filter(item => item.checked).map(item => item.name).join(', ')}</span>}</ItemToppings>
    </OrderItemStyled>
  )
};
