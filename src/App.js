import React from 'react';
import { NavBar } from './Components/NavBar';
import { Menu } from './Components/Menu';
import { GlobalStyle } from './Components/GlobalStyle';

const App = () => (
  <>
    <GlobalStyle />
    <NavBar />
    <Menu />
  </>
);

export default App;
