import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    name: '',
  });

  return (
    <>
      <ContactForm />
      <ContactList />
    </>
  );
};
