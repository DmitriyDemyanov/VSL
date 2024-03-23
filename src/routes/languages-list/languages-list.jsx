import { useSelector } from "react-redux";


import Header from "../../components/header/header.component";
import LanguageItem from "../../components/language-item/language-item.component";

import { LanguagesListContainer } from "./languages-list.styles";


const LanguagesList = () => {

  const languages = useSelector((state) => state.languages.languages);
  
  return (
    <LanguagesListContainer>
      <Header />
      <div className="language-item-wrapper">
        {
          languages.map((item) => <LanguageItem item={item} key={item.id} />)
        }
      </div>
    </LanguagesListContainer>
  )
};

export default LanguagesList;