import {
  ContactFormContainer,
  ContactFormUI,
  ContactFormLabel,
  ContactFormInput,
  ContactFormAddButton,
} from './ContactFormStyles';

const ContactForm = ({ addContact }) => {
  return (
    <ContactFormContainer>
      <ContactFormUI onSubmit={addContact}>
        <ContactFormLabel htmlFor="name">Name:</ContactFormLabel>
        <ContactFormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />

        <ContactFormLabel htmlFor="number">Number:</ContactFormLabel>
        <ContactFormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <ContactFormAddButton type="submit">Add contact</ContactFormAddButton>
      </ContactFormUI>
    </ContactFormContainer>
  );
};

export default ContactForm;
