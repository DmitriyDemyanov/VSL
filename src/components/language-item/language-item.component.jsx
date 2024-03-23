import { useNavigate } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';

import { setCurrentLanguage } from '../../store/languages/languages.action';
import { getCurrentLanguage } from '../../store/languages/languages.selector';

import { ReactComponent as CheckMark } from '../../assets/icons/check-mark-icons.svg'

import { LanguageItemContainer } from "./language-item.styles"



const LanguageItem = ({ item }) => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(getCurrentLanguage);

  const onLanguageSelect = (item) => {
    // document.body.classList.toggle("light-theme"); how to access body to change theme
    dispatch(setCurrentLanguage(item));
    nav('/')
  }

  return (
    <LanguageItemContainer onClick={() => onLanguageSelect(item)}>
      <span>{item.name}</span>   
      <span className={`${currentLanguage.id === item.id ? "check-wrapper" : "hide"} `} > <CheckMark /> </span>
    </LanguageItemContainer>
  )
};

export default LanguageItem;