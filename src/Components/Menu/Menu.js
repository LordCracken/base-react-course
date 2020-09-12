import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/context';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';
import loadingImg from '../../image/loading.gif';
import errorImg from '../../image/error.png';

const MenuStyled = styled.main`
  margin-top: 80px;
  margin-left: 420px;
  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;

const SectionMenu = styled.section`
  padding: 30px;
  @media (max-width: 1200px) {
    margin-left: 40px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const MenuHeading = styled.h2`
  @media (max-width: 1360px) {
    text-align: center;
  }
`;

export const Menu = () => {
  const { openItem: { setOpenItem } } = useContext(Context);
  const res = useFetch();
  const dbMenu = res.response;

  return(
    <MenuStyled>
      <Banner />
      {res.response ? 
        <>
          <SectionMenu>
            <MenuHeading>Бургеры</MenuHeading>
            <ListItem 
              itemList={dbMenu.burger}
              setOpenItem={setOpenItem} />
          </SectionMenu>
          <SectionMenu>
            <MenuHeading>Закуски / Напитки</MenuHeading>
            <ListItem 
              itemList={dbMenu.other}
              setOpenItem={setOpenItem} />
          </SectionMenu>
        </> : res.error ? <div><img src={errorImg} alt="Ошибка" /></div> : <div><img src={loadingImg} alt="Загрузка" /></div>
      }
    </MenuStyled>
  );
};
