const ContactList = ({ state }) => {
  return (
    <div>
      <h2>ContactList</h2>

      <ul>
        {state.contacts.map(contact => {
          return <li>{contact}</li>;
        })}
      </ul>
    </div>
  );
};

export default ContactList;
