import React, { useContext } from 'react';
import styled from 'styled-components';
import LogoImg from '../../image/logo.svg';
import SignImg from '../../image/sign.svg';
import { Context } from '../Functions/context';

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
  width: 100%;
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
  @media (max-width: 480px) {
    display: none;
  }
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const Sign = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  font-size: 16px;
  text-transform: lowercase;
  color: #ffffff;  
  background-color: transparent;
`;

const UserImg = styled.img`
  margin-bottom: 3px;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

const LogOut = styled.span`
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;

const Figure = styled.figure`
  margin: 0 30px;
  @media (max-width: 768px) {
    margin: 0 15px;
    figcaption {
      font-size: 12px;
    }
  }
`;

export const NavBar = () => {
  const { auth: { authentication, logIn, logOut } } = useContext(Context);
  return (
    <NavBarStyled>
      <Logo>
        <ImgLogo src={LogoImg} alt="logo" />
        <H1>MrDonald's</H1>
      </Logo>
      {authentication ? 
        <User>
          <Figure>
            <UserImg src={SignImg} alt={authentication.displayName} />
            <figcaption>{authentication.displayName}</figcaption>
          </Figure>
          <LogOut title="Выйти" onClick={logOut}>X</LogOut>
        </User> : 
        <Sign onClick={logIn}>
          <Figure>
            <UserImg src={SignImg} alt="войти" />
            <figcaption>Войти</figcaption>
          </Figure>
        </Sign>}
    </NavBarStyled>
  )
};