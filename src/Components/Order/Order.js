import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import { OrderListItem } from './OrderListItem';
import { OrderTitle, Total, TotalPrice } from '../Style/OrderComponents';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 420px;
  height: calc(100% - 80px);
  background-color: #fff;
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  z-index: 2;
  #order-sign {
    display: none;
  }
  @media (max-width: 1200px) {
    left: -380px;
    padding: 10px;
    transition: left 0.5s;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: #fff;
    }
    #order-sign {
      display: block;
    }
    &:hover {
      left: 0;
      transition: left 0.5s;
      &::after {
        display: none;
      }
      #order-sign {
        display: none;
      }
    }
  }
  @media (max-width: 480px) {
    left: -260px;
    max-width: 300px;
  }
`;

const OrderSign = styled.span`
  position: absolute;
  top: 50%;
  right: -10px;
  color: grey;
  transform: rotate(-90deg);
  z-index: 3;
`;

const OrderContent = styled.div`
  flex-grow: 1;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const EmptyList = styled.span`
  display: block;
  text-align: center;
`;

export const Order = () => {
  const { 
    orders: { orders, setOrders }, 
    openItem: { setOpenItem }, 
    auth: { authentication, logIn }, 
    orderConfirm: { setOpenOrderConfirm } 
  } = useContext(Context);

  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
  const totalCounter = orders.reduce((result, order) => order.count + result, 0);
  const deleteOrder = order => setOrders(orders.filter(item => item !== order));

  return (
    <OrderStyled>
      <OrderSign id="order-sign">Заказ</OrderSign>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        {orders.length ? 
        <ul>
          {orders.map((order, i) => <OrderListItem 
                                      order={order} 
                                      key={i}
                                      index={i} 
                                      deleteOrder={deleteOrder} 
                                      setOpenItem={setOpenItem} />)}
        </ul> :
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      {orders.length ? 
      <>
        <Total>
          <span>Итого</span>
          <span>{totalCounter}</span>
          <TotalPrice>{formatCurrency(total)}</TotalPrice>
        </Total>
        <ButtonCheckout onClick={() => authentication ? setOpenOrderConfirm(true) : logIn()}>Оформить</ButtonCheckout>
      </> : null}
    </OrderStyled>
  )
};
