import { useState } from 'react';
import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    name: '',
  });

  const handleAddContact = e => {
    e.preventDefault();

    const nameInput = e.target[0];

    const nameInputValue = nameInput.value;
    const namePattern = new RegExp(nameInput.pattern);

    if (namePattern.test(nameInputValue)) {
      console.log(nameInputValue);
    } else {
      alert(nameInput.title);
    }
  };

  return (
    <>
      <ContactForm addContact={handleAddContact} />
      <ContactList />
    </>
  );
};
