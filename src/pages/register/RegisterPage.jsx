import RegisterForm from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';

import { Picture, RegisterBox, Text, Title, P } from './registerPageStyled';
import Maim from './../../components/Main/Maim';

const RegisterPage = () => {
  return (
    <Maim>
      <Picture />
      <RegisterBox>
        <Text>
          <Title>Register</Title>
          <P>
            To start using our services, please fill out the registration form
            below. All fields are mandatory:
          </P>
        </Text>
        <RegisterForm />
        <NavLink to="/login">Login</NavLink>
      </RegisterBox>
    </Maim>
  );
};

export default RegisterPage;
