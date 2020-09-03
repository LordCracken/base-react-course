import React from 'react';
import styled from 'styled-components';
import { CountItem } from './CountItem';
import { ButtonCheckout } from '../Style/ButtonCheckout';
import { Toppings } from './Toppings';
import { useCount } from '../Hooks/useCount';
import { useToppings } from '../Hooks/useToppings';
import { totalPriceItems, formatCurrency } from '../Functions/secondaryFunction'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, .5);
`;

const Modal = styled.div`
  width: 600px;
  background-color: #fff;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  padding: 20px 40px 43px;
  height: calc(100% - 200px);
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  font-family: Pacifico, cursive;
  font-size: 30px;
`;

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount();
  const toppings = useToppings(openItem);

  const closeModal = e => {
    if (e.target.id === 'overlay') setOpenItem(null)
  };

  const order = { ...openItem, count: counter.count, topping: toppings.toppings };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <Info>
            <span>{openItem.name}</span>
            <span>{formatCurrency(openItem.price)}</span>
          </Info>
            <CountItem {...counter} />
            {openItem.toppings && <Toppings {...toppings} />}
            <TotalPriceItem>
              <span>Итоговая цена:</span>
              <span>{formatCurrency(totalPriceItems(order))}</span>
            </TotalPriceItem>
          <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
};