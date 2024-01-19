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

    const numberInput = e.target[1];
    const numberInputValue = numberInput.value;
    const numberPattern = new RegExp(numberInput.pattern);

    if (
      namePattern.test(nameInputValue) &&
      numberPattern.test(numberInputValue)
    ) {
      setState(prevState => ({
        ...prevState,
        contacts: [...prevState.contacts, nameInputValue],
      }));
    } else {
      const errorMessage = namePattern.test(nameInputValue)
        ? numberInput.title
        : nameInput.title;
      alert(errorMessage);
    }
  };

  return (
    <>
      <ContactForm addContact={handleAddContact} />
      <ContactList state={state} />
    </>
  );
};
