import { StyledContacts } from './Contacns.styled';

const Contacts = ({ contacts, onDelete }) => {
  return (
    <StyledContacts>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id} id={id}>
            <span>
              {name} : {number}
            </span>
            <button type="button" onClick={onDelete}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </StyledContacts>
  );
};

export default Contacts;
