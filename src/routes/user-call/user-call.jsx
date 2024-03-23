import { ReactComponent as HangUp } from '../../assets/icons/hang-up-icon.svg'

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Header from "../../components/header/header.component";
import { getUserCalling,getUserCallingName } from '../../store/users/users.selector';

import { UserCallContainer } from "./user-call.styles";

const UserCall = () => {
  const user = useSelector(getUserCalling);
  const name = useSelector(getUserCallingName);
  const nav = useNavigate();
  
  return (
    <UserCallContainer>
      <Header />
      <div className='wrapper-content-user'>
        <div>Calling to</div>
        <div>{name}</div>
        <div>Floor: {user.officeFloor}</div>
        <div>Calling</div>
      </div>

      <div className='wrapper-icon' >
        <div onClick={() => nav('/')} > <HangUp /></div>
        <div className='descr-icon'>cancel</div>
      </div>
      <div className='wrapper-progress-bar'>
        <div className='progress-bar animated-progress-bar'></div>
      </div>
    </UserCallContainer>
  )
};

export default UserCall;