import styled from 'styled-components';
import { Field, Form } from 'formik';

export const Forma = styled(Form)``;
export const FormList = styled.ul`
  width: 343px;
  display: grid;
  gap: 14px;
`;
export const Imput = styled(Field)`
  width: 100%;

  padding: 16px 18px 16px 18px;
  border-radius: 15px;
  background-color: inherit;
  border: 1px solid rgba(18, 20, 23, 0.1);

  font-family: MacPaw Fixel Display;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
