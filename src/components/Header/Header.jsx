import Logo from '../Logo/Logo';
import BoxUser from '../BoxUser/BoxUser';
import { HeaderBox } from './HeaderStyled';

const Header = () => {
  return (
    <>
      <HeaderBox>
        <Logo />
        <BoxUser />
      </HeaderBox>
    </>
  );
};

export default Header;
