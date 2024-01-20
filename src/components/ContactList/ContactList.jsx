import { nanoid } from 'nanoid';

const ContactList = ({ state }) => {
  console.log(state);
  return (
    <div>
      <h2>ContactList</h2>

      <ul>
        {state.contacts.map(contact => {
          const id = nanoid();
          return <li key={id}>{`${contact.name} ${contact.number}`}</li>;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
