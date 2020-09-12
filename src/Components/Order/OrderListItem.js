import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImage from '../../image/trash.svg';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
  @media (max-width: 480px) {
    justify-content: space-between;
  }
`;

const ItemName = styled.span`
  flex-grow: 1;
  max-width: 180px;
  @media (max-width: 480px) {
    max-width: 110px;
  }
`;

const ItemToppings = styled.span`
  flex-basis: 100%;
  display: block;
  font-size: 14px;
  color: #9A9A9A;
`;

const ItemPrice = styled.span`
  margin-right: 13px;
  margin-left: 30px;
  min-width: 95px;
  text-align: right;
  @media (max-width: 480px) {
    margin-right: 8px;
    margin-left: 15px;
    min-width: 80px;
  }
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
