import styled from 'styled-components';

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  border: solid transparent 2px;
  padding: 19px 0;
  width: 250px;
  font-size: 21px;
  font-family: inherit;
  color: white;
  background: #299B01;
  transition-property: color, background, border;
  transition-duration: .3s;
  &:hover {
    border: solid #299B01 2px;
    color: #299B01;
    background: #fff;
  }
`;