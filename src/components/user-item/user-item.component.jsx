import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setCallingUser } from "../../store/users/users.actions";

import { UserItemContainer } from "./user-item.styles";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const CallingUser = (user) => {
    dispatch(setCallingUser(user));
    nav('user-call');
  }

  return (
    <UserItemContainer onClick={() => CallingUser(user)}>
      <span> {user.firstName} </span>
      <span style={{ paddingLeft: '5px' }}> {user.familyName}, </span>
      <span style={{ paddingLeft: '5px' }}> {user.buildingNumber} </span>
    </UserItemContainer>
  )
};

export default UserItem;