import { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm.jsx';
import ContactList from './ContactList/ContactList.jsx';
import Filter from 'components/Filter/Filter.jsx';

export const App = () => {
  const [state, setState] = useState({
    contacts: [],
    filter: '',
    name: '',
    number: '',
  });
  const handleAddContact = e => {
    e.preventDefault();

    const nameInput = e.target[0];
    const nameInputValue = nameInput.value;
    const namePattern = new RegExp(nameInput.pattern);

    const numberInput = e.target[1];
    const numberInputValue = numberInput.value;
    const numberPattern = new RegExp(numberInput.pattern);

    const isContactExists = state.contacts.some(
      contact => contact.name.toLowerCase() === nameInputValue.toLowerCase()
    );

    if (isContactExists) {
      alert(`${nameInputValue} is already in contacts.`);
      return;
    }

    if (
      namePattern.test(nameInputValue) &&
      numberPattern.test(numberInputValue)
    ) {
      const newContact = {
        id: `id-${nanoid()}`,
        name: nameInputValue,
        number: numberInputValue,
      };

      setState(prevState => ({
        ...prevState,
        contacts: [...prevState.contacts, newContact],
      }));
    } else {
      const errorMessage = namePattern.test(nameInputValue)
        ? numberInput.title
        : nameInput.title;
      alert(errorMessage);
    }
  };

  const handleFilterChange = filterValue => {
    setState(prevState => ({
      ...prevState,
      filter: filterValue,
    }));
  };

  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm addContact={handleAddContact} />

      <h2>Contacts</h2>
      <Filter handleFilterChange={handleFilterChange} />
      <ContactList state={state} />
    </>
  );
};
