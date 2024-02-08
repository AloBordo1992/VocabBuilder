import { ReactComponent as BtnNavMobail } from '../../pictures/svg/NavBtnMobail.svg';
// import { ReactComponent as BtnNavTablet } from '../../pictures/svg/NavBtnTablet.svg';
import {
  UserBox,
  User,
  UserNickName,
  BoxAvatar,
  Avatar,
  BtnNav,
} from './BoxUserStled';
import defoltAvatar from '../../pictures/UaerAvatar/gridicons_userMobail.png';

const BoxUser = () => {
  return (
    <UserBox>
      <User>
        <UserNickName>User</UserNickName>
        <BoxAvatar>
          <Avatar src={defoltAvatar} />
        </BoxAvatar>
      </User>
      <BtnNav type="button">
        <BtnNavMobail />
      </BtnNav>
    </UserBox>
  );
};

export default BoxUser;
