import styled from 'styled-components';
import jpg from '../../pictures/illustrationmobail@1x.png';

export const Picture = styled.div`
  width: 247px;
  height: 191px;
  background-image: url(${jpg});
  background-size: cover;
`;
export const RegisterBox = styled.div`
  display: grid;
  justify-items: center;
  gap: 16px;

  max-width: 375px;
  border-radius: 25px 25px 0px 0px;
  background: rgba(133, 170, 159, 0.1);
  padding: 32px 16px 0 16px;
`;
export const Text = styled.div`
  display: grid;
  gap: 16px;
`;
export const Title = styled.h1`
  //styleName: Mobile_ Headline text/H1;
  font-family: MacPaw Fixel Display;
  font-size: 30px;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.02em;
  text-align: left;
`;
export const P = styled.p`
  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
