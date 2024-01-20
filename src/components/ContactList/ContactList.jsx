import ContactListItem from 'components/ContactListItem/ContactListItem.jsx';

import { nanoid } from 'nanoid';

const ContactList = ({ state }) => {
  const filteredContacts = state.contacts.filter(contact =>
    contact.name.toLowerCase().includes(state.filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filteredContacts.map(contact => {
          const id = nanoid();
          return (
            <ContactListItem
              key={id}
              text={`${contact.name} ${contact.number}`}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;
