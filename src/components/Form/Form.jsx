import { Component } from 'react';
import { StyledForm } from './Form.styled';
import { nanoid } from 'nanoid';
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"


class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handleInputGange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ id: nanoid() });

    this.props.onSubmit(this.state)
  };

  render() {
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputGange}
          />
        </label>
        <label>
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputGange}
          />
        </label>
        <button type="sabmit">Add Contact</button>
      </StyledForm>
    );
  }
}

export default Form;
