import { StyledContacts } from './Contacns.styled';

const Contacts = ({ contacts }) => {
  return (
    <StyledContacts>
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
