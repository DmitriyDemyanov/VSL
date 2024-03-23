
import { ReactComponent as LanguageIcon } from '../../assets/icons/language-selection-icon.svg'
import { ReactComponent as ChevronLeft } from '../../assets/icons/chevron-left-icons.svg'


import { HeaderButtonContainer } from "./header-button.styles";

const HeaderButton = ({ icon }) => {
  return (
    <HeaderButtonContainer  >
      {icon === 'chevron-left' ? <ChevronLeft /> : <LanguageIcon />}
    </HeaderButtonContainer>
  )
};

export default HeaderButton;