import {
  ContactListLi,
  ContactListName,
  ContactListNumber,
  ContactListRemoveButton,
} from './ContactListItemStyles';

const ContactListItem = ({ name, number, id, removeContact }) => {
  return (
    <ContactListLi>
      <ContactListName>{name}</ContactListName>
      <ContactListNumber>{number}</ContactListNumber>
      <ContactListRemoveButton onClick={() => removeContact(id)}>
        Delete
      </ContactListRemoveButton>
    </ContactListLi>
  );
};

export default ContactListItem;
