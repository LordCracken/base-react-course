import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

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

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
};

export default App;
