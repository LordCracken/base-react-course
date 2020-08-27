import React from 'react';
import styled from 'styled-components';
import LogoImg from '../image/logo.svg';
import SignImg from '../image/sign.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  width: 100vw;
  color: #ffffff;
  background-color: #299B01;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Sign = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16px;
  text-transform: lowercase;
  color: #ffffff;  
  background-color: transparent;
`;

const ImgSign = styled.img`
  margin-bottom: 3px;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={LogoImg} alt="logo" />
      <H1>MrDonald's</H1>
    </Logo>
    <Sign>
      <ImgSign src={SignImg} alt="войти" />
      <span>Войти</span>
    </Sign>
  </NavBarStyled>
);