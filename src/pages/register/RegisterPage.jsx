import RegisterForm from 'components/RegisterForm/RegisterForm';
import { Picture, RegisterBox, Text, Title, P } from './registerPageStyled';

const RegisterPage = () => {
  return (
    <div>
      <Picture></Picture>
      <RegisterBox>
        <Text>
          <Title>Register</Title>
          <P>
            To start using our services, please fill out the registration form
            below. All fields are mandatory:
          </P>
        </Text>

        <RegisterForm />

        <button></button>
      </RegisterBox>
    </div>
  );
};

export default RegisterPage;
