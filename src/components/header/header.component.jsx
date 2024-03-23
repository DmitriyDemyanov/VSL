
import HeaderButton from "../buttons/header-button.component";
import { useNavigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { HeaderContainer } from "./header.component.styles";



const cancelButton = ['/languages-list','/user-call'];
const languagesButton = ['/','/contact-search'];
const title = ['/','/contact-search'];

const Header = () => {
  const { pathname } = useLocation();
  const nav = useNavigate();
  const currentLanguage = useSelector((state) => state.languages.currentLanguage);

  const isCancelShows = cancelButton.includes(pathname);
  const isLanguagesShows = languagesButton.includes(pathname);
  const isTitleShows = title.includes(pathname);

  return (
    <HeaderContainer>
      <div
        className={`wrapper-button ${isLanguagesShows ? '' : 'hide'}`}
        onClick={() => nav('/languages-list')}
      >
        <HeaderButton icon={''} />
        <span>{currentLanguage.code}</span>
      </div>

      <div
        className={`wrapper-button ${isCancelShows ? '' : 'hide'}`}
        onClick={() => nav('/')}
      >
        <HeaderButton icon={'chevron-left'} />
        <span>Cancel</span>
      </div>

      <div className={`${isTitleShows ? 'header-title' : 'hide'}`}>Weblep_Building_25</div>

    </HeaderContainer>
  )
};
export default Header;