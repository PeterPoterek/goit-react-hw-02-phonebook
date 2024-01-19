import { nanoid } from 'nanoid';

const ContactList = ({ state }) => {
  return (
    <div>
      <h2>ContactList</h2>

      <ul>
        {state.contacts.map(contact => {
          const id = nanoid();
          return <li key={id}>{contact}</li>;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
