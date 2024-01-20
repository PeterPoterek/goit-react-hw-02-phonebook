import ContactListItem from 'components/ContactListItem/ContactListItem.jsx';

const ContactList = ({ state }) => {
  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => {
          return (
            <ContactListItem
              key={contact.id}
              name={contact.name}
              number={contact.number}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
