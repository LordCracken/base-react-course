import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: "AIzaSyAQhkSCsWvo_GSj45YercWBx_M89DRJFoc",
  authDomain: "mrdonalds-vladyakim.firebaseapp.com",
  databaseURL: "https://mrdonalds-vladyakim.firebaseio.com",
  projectId: "mrdonalds-vladyakim",
  storageBucket: "mrdonalds-vladyakim.appspot.com",
  messagingSenderId: "958768728082",
  appId: "1:958768728082:web:bf30e7cd677a88367f30cb"
};

firebase.initializeApp(firebaseConfig);

const App = () => {

  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      firebaseDatabase: firebase.database
    }}> 
      <GlobalStyle />
      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && <OrderConfirm />}
    </Context.Provider>
  );
};

export default App;
