import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import { Overlay } from '../Modal/ModalItem';
import { OrderTitle, Total, TotalPrice } from '../Style/OrderComponents';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { totalPriceItems, formatCurrency, projection } from '../Functions/secondaryFunction';

const Modal = styled.div`
  padding: 30px;
  width: 600px;
  text-align: center;
  background-color: #fff;
`;

const Text = styled.h3`
  margin-bottom: 30px;
  text-align: center;
`;

const rulesData = {
  name: ['name'],
  price: ['price'],
  count: ['count'],
  topping: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name), arr => arr.length ? arr : 'no topping'],
  choice: ['choice', item => item ? item : 'no choices']
};

const sendOrder = (dataBase, orders, authentication) => {
  const newOrder = orders.map(projection(rulesData));
  dataBase.ref('orders').push().set({
    nameClient: authentication.displayName,
    email: authentication.email,
    order: newOrder
  });
};


export const OrderConfirm = () => {
  const { 
    orders: { orders, setOrders }, 
    auth: { authentication }, 
    orderConfirm: { setOpenOrderConfirm }, 
    firebaseDatabase 
  } = useContext(Context);
  
  const closeOrderConfirm = e => {
    if (e.target.id === 'confirm-overlay') setOpenOrderConfirm(false)
  };

  const dataBase = firebaseDatabase();
  const total = orders.reduce((result, order) => totalPriceItems(order) + result, 0);
  return (
    <Overlay id="confirm-overlay" onClick={closeOrderConfirm}>
      <Modal>
        <OrderTitle>{authentication.displayName}</OrderTitle>
        {orders.length ? 
          <>
            <Text>Осталось только подтвердить ваш заказ</Text>
            <Total>
              <span>Итого</span>
              <TotalPrice>{formatCurrency(total)}</TotalPrice>
            </Total>
            <ButtonCheckout 
              onClick={() => {
                sendOrder(dataBase, orders, authentication);
                setOrders([]);
              }}>Подтвердить</ButtonCheckout>
          </> : `Спасибо за заказ!`
          }
      </Modal>
    </Overlay>
  );
};
