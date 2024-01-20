import ContactListItem from 'components/ContactListItem/ContactListItem.jsx';
import { ContactListContainer, ContactListUl } from './ContactListStyles';

const ContactList = ({ state, removeContact }) => {
  const filteredContacts = state.contacts.filter(contact => {
    const name = contact.name.toLowerCase();
    const filterText = state.filter.toLowerCase();
    return (
      name.includes(filterText) ||
      name.split(' ').some(part => part.startsWith(filterText))
    );
  });

  return (
    <ContactListContainer>
      <ContactListUl>
        {filteredContacts.map(contact => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
              id={contact.id}
              removeContact={removeContact}
            />
          );
        })}
      </ContactListUl>
    </ContactListContainer>
  );
};

export default ContactList;
