import { useEffect,useRef,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setCurrentUsers } from '../../store/users/users.actions';
import { setAllLanguages } from '../../store/languages/languages.action';

import { ReactComponent as ScanIcon } from '../../assets/icons/scanner-icons.svg';
import { ReactComponent as Chevron } from '../../assets/icons/chevron-down-icons.svg';

import Header from "../../components/header/header.component";
import UserItem from "../../components/user-item/user-item.component";

import { ContactListContainer } from "./contact-list.styles";




const usersFetch = [
  { "familyName": "Business","firstName": "Valentina","phone": "sip:b@vct-15.local","officeFloor": 11,"buildingNumber": 1,"id": 3 },
  { "familyName": "Business","firstName": "Tom","phone": "sip:b@vct-14.local","officeFloor": 31,"buildingNumber": 1,"id": 4 },
  { "familyName": "Residential","firstName": "Angelas","phone": "sip:b@vct-555777.local,sip:resident.angela_schindler.com@sip.myport.schindler.com","officeFloor": 15,"buildingNumber": 1,"id": 5 },
  { "familyName": "Building Mgr","firstName": "Lee","phone": "sip:b@vct-5.local","officeFloor": 15,"buildingNumber": 13,"id": 6 },
  { "familyName": "Ankor","firstName": "Bomns","phone": "sip:b@vct-12.local","officeFloor": 13,"buildingNumber": 1,"id": 14 },
  { "familyName": "Buirsa","firstName": "Citrix","phone": "sip:b@vct-0.local","officeFloor": 21,"buildingNumber": 1,"id": 30 },
  { "familyName": "Andron","firstName": "Kilor","phone": "sip:b@vct-11.local","officeFloor": 14,"buildingNumber": 1,"id": 38 },
  { "familyName": "Building Mgr","firstName": "Lee","phone": "sip:b@vct-5.local","officeFloor": 15,"buildingNumber": 13,"id": 39 },
  { "familyName": "Ankor","firstName": "Bomns","phone": "sip:b@vct-12.local","officeFloor": 13,"buildingNumber": 1,"id": 40 },
  { "familyName": "Buirsa","firstName": "Citrix","phone": "sip:b@vct-0.local","officeFloor": 21,"buildingNumber": 1,"id": 41 },
  { "familyName": "Andron","firstName": "Kilor","phone": "sip:b@vct-11.local","officeFloor": 14,"buildingNumber": 1,"id": 42 },
  { "familyName": "Business","firstName": "Valentina","phone": "sip:b@vct-15.local","officeFloor": 11,"buildingNumber": 1,"id": 113 },
  { "familyName": "Business","firstName": "Tom","phone": "sip:b@vct-14.local","officeFloor": 31,"buildingNumber": 1,"id": 114 },
  { "familyName": "Residential","firstName": "Angelas","phone": "sip:b@vct-555777.local,sip:resident.angela_schindler.com@sip.myport.schindler.com","officeFloor": 15,"buildingNumber": 1,"id": 115 },
  { "familyName": "Building Mgr","firstName": "Lee","phone": "sip:b@vct-5.local","officeFloor": 15,"buildingNumber": 13,"id": 116 },
  { "familyName": "Ankor","firstName": "Bomns","phone": "sip:b@vct-12.local","officeFloor": 13,"buildingNumber": 1,"id": 1114 },
  { "familyName": "Buirsa","firstName": "Citrix","phone": "sip:b@vct-0.local","officeFloor": 21,"buildingNumber": 1,"id": 1130 },
  { "familyName": "Andron","firstName": "Kilor","phone": "sip:b@vct-11.local","officeFloor": 14,"buildingNumber": 1,"id": 1138 },
  { "familyName": "Building Mgr","firstName": "Lee","phone": "sip:b@vct-5.local","officeFloor": 15,"buildingNumber": 13,"id": 1139 },
  { "familyName": "Ankor","firstName": "Bomns","phone": "sip:b@vct-12.local","officeFloor": 13,"buildingNumber": 1,"id": 1140 },
  { "familyName": "Buirsa","firstName": "Citrix","phone": "sip:b@vct-0.local","officeFloor": 21,"buildingNumber": 1,"id": 1141 },
  { "familyName": "Andron","firstName": "Kilor","phone": "sip:b@vct-11.local","officeFloor": 14,"buildingNumber": 1,"id": 1142 },
  { "familyName": "Andron","firstName": "Kidor","phone": "sip:b@vct-11.local","officeFloor": 14,"buildingNumber": 1,"id": 1143 },
  { "familyName": "Andron","firstName": "Kiror","phone": "sip:b@vct-11.local","officeFloor": 14,"buildingNumber": 1,"id": 1144 }
]

const languagesFetch = [
  {
    id: 1,
    code: 'en',
    name: 'english'
  },
  {
    id: 2,
    code: 'de',
    name: 'Deutsch'
  },
  {
    id: 3,
    code: 'it',
    name: 'Italiano'
  }
]

const ContactList = () => {
  const dispatch = useDispatch();
  const listRef = useRef(null);
  const nav = useNavigate();
  const users = useSelector((state) => state.users.users);
  const [chevronDown,setChevronDown] = useState(false);

  useEffect(() => {
    dispatch(setCurrentUsers(usersFetch));
    dispatch(setAllLanguages(languagesFetch))
  },[]);

  useEffect(() => {
    const userItemHeight = 72;
    if (listRef.current.offsetHeight < (users.length * userItemHeight)) {
      setChevronDown(true);
    }
  },[listRef,users.length]);
  let sum = 0;
  const scrollListRef = () => {
    if (sum + listRef.current.offsetHeight < (users.length * 72)) {
      sum = sum + 216;
      listRef.current.scroll({ top: sum,left: 0,behavior: "smooth",});
    }
    else {
      sum = 0;
      listRef.current.scroll({ top: sum,left: 0,behavior: "smooth",});
    }
  }

 const routeToContactSearch = () => {
    nav('contact-search')
  }

  return (
    <ContactListContainer>
      <Header />
      <div
        ref={listRef}
        className="user-wrapper"
      >
        {users.map((user) =>
          <UserItem
            user={user}
            key={user.id}
          />
        )}
      </div>
      <div
        className={`${chevronDown ? "chevron-icon-wrapper" : 'hide'}`}
        onClick={() => scrollListRef()}
      > <Chevron /> </div>
      <div
        className="scan-icon-wrapper"
        onClick={() => routeToContactSearch()}
      > <ScanIcon /> </div>
    </ContactListContainer>
  )
};

export default ContactList;