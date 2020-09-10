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
`;

const OrderContent = styled.div`
  flex-grow: 1;
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
