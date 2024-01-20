import ContactListItem from 'components/ContactListItem/ContactListItem.jsx';

import { nanoid } from 'nanoid';

const ContactList = ({ state }) => {
  return (
    <div>
      <ul>
        {state.contacts.map(contact => {
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
