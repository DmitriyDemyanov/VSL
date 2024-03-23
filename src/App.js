
import { Routes,Route } from 'react-router-dom';

import ContactList from './routes/contact-list/contact-list';
import LanguagesList from './routes/languages-list/languages-list';
import UserCall from './routes/user-call/user-call';
import ContactSearch from './routes/contact-search/contact-search';

function App() {
  return (

    <Routes>
      <Route path='/' element={<ContactList />} />
      <Route path='languages-list' element={<LanguagesList />} />
      <Route path='user-call' element={<UserCall />} />
      <Route path='contact-search' element={<ContactSearch/>} />
    </Routes>

  );
}

export default App;
