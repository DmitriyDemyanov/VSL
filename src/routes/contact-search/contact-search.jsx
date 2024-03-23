import { useEffect,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import { getUsers } from '../../store/users/users.selector';
import { setCallingUser } from "../../store/users/users.actions";

import Header from '../../components/header/header.component'

import { ReactComponent as SearchIcon } from '../../assets/icons/search-icon.svg';
import { ReactComponent as ScanIcon } from '../../assets/icons/scanner-icons.svg';
import { ReactComponent as Delete } from '../../assets/icons/delete-icon.svg';
import { ContactSearchContainer } from "./contact-search.styles";



const keyboardNumber = ['1','2','3','4','5','6','7','8','9','0'];

const keyboardEnglish = [
  ['q','w','e','r','t','y','u','i','o','p'],
  ['a','s','d','f','g','h','j','k','l'],
  ['z','x','c','v','b','n','m']
];

const ContactSearch = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const users = useSelector(getUsers);

  const [searchInput,setSearchInput] = useState('Please enter their name...');
  const [searchUser,setSearchUser] = useState([]);


  useEffect(() => setSearchUser(users.filter((user) => user.firstName.toLowerCase().startsWith(searchInput))),[searchInput])


  if (!searchInput) {
    setSearchInput('Please enter their name...');  // working with out useEffect.
  }

  const searchInputUser = (symbol) => {
    if (searchInput === 'Please enter their name...') {
      setSearchInput(symbol);
    }
    else {
      setSearchInput(searchInput + symbol);
    }
  }
  const deleteSymbolSearch = () => {
    if (!(searchInput === 'Please enter their name...')) {
      setSearchInput(searchInput.slice(0,-1));
    }
  };

  const CallingUser = (user) => {
    dispatch(setCallingUser(user));
    nav('/user-call');
  }

  return (
    <ContactSearchContainer>
      <div className="bg-header">
        <Header />
        <div className='search-input'>{searchInput}
          <div className="search-icon"><SearchIcon /></div>
        </div>

        <div className={`search-dropdown ${searchUser.length || searchInput !== 'Please enter their name...' ? '' : 'hide'}`}>
          {searchUser.length ? <div className='description-dropdown' >{searchUser.length} entries found</div> : ''}
          {searchUser.length ? searchUser.map((user) =>
          (<div
            className='search-user'
            key={user.id}
            onClick={() => CallingUser(user)}
          > {user.firstName} {user.familyName}, office {user.officeFloor}

          </div>)) :
            <div>visitor not found</div>
          }
        </div>

      </div>
      <div className={'content-title'}>
        <div className={` ${searchInput !== 'Please enter their name...' ? 'hide' : ''}`}>
          In order to start the search, start entering the name into the search bar
        </div>


      </div>
      <div className={`scan-icon ${searchInput !== 'Please enter their name...' ? 'hide' : ''} `}><ScanIcon /></div>
      <div className="wrapper-keyboard">
        <div className="wrapper-symbols">
          {
            keyboardNumber.map((number,ind) => <div className='keyboard-button' key={ind} onClick={() => searchInputUser(number)} >{number}</div>)
          }
        </div>
        {
          keyboardEnglish.map((el,ind) =>
          (<div className='wrapper-symbols' key={ind} style={{ gridTemplateColumns: `repeat(${el.length}, 1fr)` }} >
            {
              el.map((symbol,index) => (<div className='keyboard-button' key={index} onClick={() => searchInputUser(symbol)}>{symbol}</div>))
            }
          </div>))
        }
        <div className="wrapper-spacial-symbols">
          <div className="keyboard-button spacial">öäü</div>
          <div className="keyboard-button spacial" onClick={() => searchInputUser(' ')} ></div>
          <div className="keyboard-button spacial" onClick={() => deleteSymbolSearch()} ><Delete /></div>
        </div>
      </div>
    </ContactSearchContainer>
  )
};

export default ContactSearch;