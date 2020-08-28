import React from 'react';
import styled from 'styled-components';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { OrderListItem } from './OrderListItem';

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  min-width: 380px;
  height: calc(100% - 80px);
  background-color: #fff;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
`;

const OrderTitle = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const Total = styled.div`
  display: flex;
  margin-bottom: 63px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  margin-left: 30px;
  min-width: 47px;
  text-align: right;
`;

const EmptyList = styled.span`
  display: block;
  text-align: center;
`;

export const Order = ({ orders }) => (
  <>
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        {orders.length ? 
        <ul>
          {orders.map(order => <OrderListItem order={order} />)}
        </ul> :
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>5</span>
        <TotalPrice>850 Р</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  </>
);
