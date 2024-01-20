import ContactListItem from 'components/ContactListItem/ContactListItem.jsx';
import Filter from 'components/Filter/Filter.jsx';

import { nanoid } from 'nanoid';

const ContactList = ({ state }) => {
  console.log(state);
  return (
    <div>
      <h2>Contacts</h2>
      <Filter state={state} />
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
