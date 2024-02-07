import styled from 'styled-components';

export const LogoBox = styled.div`
  width: 182px;
  height: 36px;
  display: flex;
  align-items: center;
  gap: 16px;
  @media screen and (min-width: 768px) {
    width: 214px;
    height: 40px;
  }
`;

export const LogoTxt = styled.p`
  font-family: MacPaw Fixel Display;
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  @media screen and (min-width: 768px) {
    font-size: 22px;
    line-height: 32px;
  }
`;
