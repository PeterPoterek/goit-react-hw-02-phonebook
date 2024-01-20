const ContactListItem = ({ name, number, id, removeContact }) => {
  return (
    <li>
      <span>{name}</span>
      <span>{number}</span>
      <button onClick={() => removeContact(id)}>Delete</button>
    </li>
  );
};

export default ContactListItem;
