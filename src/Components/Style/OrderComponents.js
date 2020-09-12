import styled from 'styled-components';

export const OrderTitle = styled.h2`
  margin-bottom: 15px;
  text-align: center;
  text-transform: uppercase;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const Total = styled.div`
  display: flex;
  margin-bottom: 63px;
  & span:first-child {
    flex-grow: 1;
  }
`;

export const TotalPrice = styled.span`
  margin-left: 30px;
  min-width: 47px;
  text-align: right;
`;
