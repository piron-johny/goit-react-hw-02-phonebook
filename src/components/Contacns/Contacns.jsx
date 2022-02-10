import { StyledContacts, StyledInput } from './Contacns.styled';

const Contacts = ({ contacts, onFilter }) => {
  return (
    <StyledContacts>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <StyledInput onChange={onFilter} />
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {name} : {number}
          </li>
        ))}
      </ul>
    </StyledContacts>
  );
};

export default Contacts;
